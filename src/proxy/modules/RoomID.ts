import { PacketInterceptor } from "../packet/PacketInterceptor"
import { Packet } from "../packet/Packet"
import { World } from "./World"
import { Logger } from "../../util/Logger"
import { constructChatMessage } from "../util/packetUtils"
import { BlockData, checkpointCount, RoomName } from "../data/roomData"
import { Vec3 } from "vec3"
import { SplitTracker } from "./SplitTracker"
import { ServerClient } from "minecraft-protocol"
import { generateUniqueBlocks } from "../data/uniqueBlocks"
import { roomBlocks } from "../data/roomBlocks"

const registry = require("prismarine-registry")("1.8.9")
const Chunk = require("prismarine-chunk")(registry)
const uniqueBlocks = generateUniqueBlocks()

export class RoomID extends PacketInterceptor {
  private currentCheckpoint = 0
  private currentRoomNumber = 0
  private currentRoomName: RoomName | null = null

  private checkpointRegex = /CHECKPOINT! You reached checkpoint (\d+) in [\d:\.]+!/

  private startPosition = new Vec3(18, 72, 13)
  private currentRoomStartPosition = this.startPosition;
  private rooms: RoomName[] = []
  private splitTracker: SplitTracker
  private calcUrl = "https://wired-cod-kindly.ngrok-free.app/api/pkdutils/calc"

  get GetCurrentRoomNumber(): number {
    return this.currentRoomNumber;
  }

  constructor(splitTracker: SplitTracker) {
    super("RoomID", "1.0.0", true, ["respawn"])
    this.splitTracker = splitTracker
  }

  /**
   * Verify if the block at the given position matches the block data,
   * starting from a provided position.
   * @param from
   * @param block
   * @private
   */
  private verifyBlock(from: Vec3, block: BlockData): { found: boolean, match: boolean } {
    const blockPos = new Vec3(block.x, block.y, block.z).add(from)
    const blockAtPos = World.getBlock(blockPos.x, blockPos.y, blockPos.z)

    if (blockAtPos === null) {
      return { found: false, match: false }
    }

    return { found: true, match: blockAtPos.name === block.block_name }
  }

  /**
   * Detect the current room and return its name.
   * @private
   */
  private detectRoom(): {room: RoomName, startPos: Vec3 } | null {
    const zAddend = 57 * this.currentRoomNumber
    const startPos = new Vec3(0, 0, zAddend).add(this.startPosition)

    for (const [room, blocks] of Object.entries(uniqueBlocks)) {
      for (const block of blocks) {
        const check = this.verifyBlock(startPos, block)

        if (check.found && check.match) {
          return { room: room as RoomName, startPos: startPos }
        } else if (check.found && !check.match) {
          break // we only need to check one block
        }
      }
    }

    return null // this should never happen but typescript must be pleased
  }

  /**
   * Detects missing chunks in the current room
   * @private
   * @returns {string[]} - An array of missing chunk keys
   */
  private detectMissingChunks(): string[] {
    if (this.currentRoomName == null) {
      Logger.error("Unable to detect missing chunks as this.currentRoomName is null!")
      return []
    }

    const zAddend = 57 * this.currentRoomNumber
    const startPos = new Vec3(0, 0, zAddend).add(this.startPosition)

    const checkedChunks: string[] = [] // includes both missing and okay chunks, just to make it faster
    const missingChunkKeys: string[] = []

    for (let x = -15; x <= 15; x++) {
      for (let z = 0; z <= 50; z++) {
        const pos = new Vec3(x, 0, z).add(startPos)
        const [chunkX, chunkZ] = [pos.x >> 4, pos.z >> 4]
        const chunkKey = `${chunkX},${chunkZ}`
        if (checkedChunks.includes(chunkKey)) {
          continue
        }

        checkedChunks.push(chunkKey)

        const blockAtPos = World.getBlock(pos.x, pos.y, pos.z)
        if (blockAtPos === null) {
          missingChunkKeys.push(chunkKey)
        }
      }
    }

    return missingChunkKeys
  }

  /**
   * Recreates the chunk packet data for the given missing chunks and returns is
   * @param missingChunks
   * @private
   */
  private fixChunks(missingChunks: string[]) : { x: number, z: number, groundUp: boolean, bitMap: number, chunkData: Buffer }[] {
    if (this.currentRoomName == null) {
      Logger.error("Unable to detect missing chunks as this.currentRoomName is null!")
      return []
    }

    const zAddend = 57 * this.currentRoomNumber
    const startPos = new Vec3(0, 0, zAddend + 1).add(this.startPosition)

    const packets = []

    for (const chunkKey of missingChunks) {
      const [chunkX, chunkZ] = chunkKey.split(",").map(Number)

      const chunk = new Chunk()

      const columns = roomBlocks[this.currentRoomName].columns
      for (const [columnKey, yMap] of Object.entries(columns)) {
        const [x, z] = columnKey.split(",").map(Number)
        const columnPos = new Vec3(x, 0, z).add(startPos)

        if (columnPos.x >> 4 !== chunkX || columnPos.z >> 4 !== chunkZ) {
          continue // this column doesn't belong in this chunk
        }

        const localX = columnPos.x & 0xF
        const localZ = columnPos.z & 0xF

        for (const [yStr, block] of Object.entries(yMap)) {
          const y = parseInt(yStr, 10) + columnPos.y

          const blockDef = registry.blocksByName[block]
          if (!blockDef) {
            Logger.error(`Block ${block} not found in registry`)
            continue
          }

          // Use the default metadata (first state) if available
          const blockData = blockDef.minState ?? 0
          const blockID = blockDef.id

          chunk.setBlockType(new Vec3(localX, y, localZ), blockID)
          chunk.setBlockData(new Vec3(localX, y, localZ), blockData)
        }
      }

      const dump = chunk.dump()
      const data = {
        x: chunkX,
        z: chunkZ,
        groundUp: true,
        bitMap: 0xFFFF,
        chunkData: dump
      }
      packets.push(data)
    }

    return packets
  }

  private detectAndFixChunks(toClient: ServerClient) {
    const missingChunks = this.detectMissingChunks()
    if (missingChunks.length > 0) {
      console.log(`Missing chunks: ${missingChunks}`)
      const packets = this.fixChunks(missingChunks)
      for (const chunkPacket of packets) {
        console.log(`Sending chunk packet for ${chunkPacket.x},${chunkPacket.z} in 30 seconds`)

        const chunk = new Chunk()
        chunk.load(chunkPacket.chunkData, chunkPacket.bitMap ?? 0xFFFF)
        const blocksInChunk: string[] = []
        for (let x = 0; x < 16; x++) {
          for (let z = 0; z < 16; z++) {
            for (let y = 0; y < 256; y++) {
              const block = chunk.getBlock(new Vec3(x, y, z))
              if (block && !blocksInChunk.includes(block.name)) {
                blocksInChunk.push(block.name)
              }
            }
          }
        }

        console.log(`Blocks in chunk: ${blocksInChunk}`)

        setTimeout(() => {
          toClient.write("map_chunk", chunkPacket)
          toClient.write("chat", {
            message: JSON.stringify({ text: `§9Missing chunk fixed at ${chunkPacket.x},${chunkPacket.z}` }),
            position: 0
          })
        }, 5000)
      }
    }
  }


  /**
   * Sends the seed to Parkour Duels Bot and returns the optimal result
   * @private
   */
  private calcSeed(seed: RoomName[], toClient: ServerClient) {
    const content = {
      rooms: seed,
      splits: this.splitTracker.splitsData
    }

    fetch(this.calcUrl, {
      method: 'POST',
      body: JSON.stringify(content)
    })
    .then(response => response.json())
    .then(data => {
      if (!toClient) {
        return;
      }
      toClient.write("chat", {
        message: JSON.stringify({ text: `§9Perfect boost time: §a${data.best.boost_time}` }),
        position: 0
      });
      toClient.write("chat", {
        message: JSON.stringify({ text: `§9Perfect boostless time: §a${data.best.boostless_time}` }),
        position: 0
      });
      toClient.write("chat", {
        message: JSON.stringify({ text: '§9You should boost in the following rooms:' }),
        position: 0
      });

      for (let br of data.best.boost_rooms) {
        let pacelockMsg = "";
        if (br.pacelock > 0) {
          br.pacelock = br.pacelock.toFixed(1);
          pacelockMsg = ` §9(pacelock §c${br.pacelock}s§9)`;
        }
        toClient.write("chat", {
          message: JSON.stringify({ text: `§9Room §6${br.index + 1}: §a${br.name}${pacelockMsg}` }),
          position: 0
        });
      }

      if (!data.personal) {
        return;
      }

      toClient.write("chat", {
        message: JSON.stringify({ text: "" }),
        position: 0
      });

      if (data.personal.boost_time === "") {
        toClient.write("chat", {
          message: JSON.stringify({ text: `§9It seems you haven't collected enough splits for us to determine the fastest time :(` }),
          position: 0
        });
      } else {
        toClient.write("chat", {
          message: JSON.stringify({ text: `§9Boost time with §6your splits§9: §a${data.personal.boost_time}` }),
          position: 0
        });
      }
      toClient.write("chat", {
        message: JSON.stringify({ text: `§9Boostless time with §6your splits§9: §a${data.personal.boostless_time}` }),
        position: 0
      });
      toClient.write("chat", {
        message: JSON.stringify({ text: '§9You should boost in the following rooms:' }),
        position: 0
      });

      for (let br of data.personal.boost_rooms) {
        let pacelockMsg = "";
        if (br.pacelock > 0) {
          br.pacelock = br.pacelock.toFixed(1);
          pacelockMsg = ` §9(pacelock §c${br.pacelock}s§9)`;
        }
        toClient.write("chat", {
          message: JSON.stringify({ text: `§9Room §6${br.index + 1}: §a${br.name}${pacelockMsg}` }),
          position: 0
        });
      }
    })
    .catch(error => {
      Logger.error(`Error calculating seed: ${error}`);
      toClient.write("chat", {
        message: JSON.stringify({ text: '§cSomething went wrong when calculating the seed :(' }),
        position: 0
      });
    });
  }

  incomingPacket(packet: Packet): Packet {
    if (packet.meta.name === "respawn") {
      this.currentCheckpoint = 0
      this.currentRoomNumber = 0
      this.currentRoomName = null
      this.rooms = []
      this.splitTracker.resetTracker();
    }

    if (packet.meta.name === "chat") {
      const text = constructChatMessage(packet.data.message)
      if ((text.startsWith(" ") && (text.trim().startsWith("Opponents:") || text.trim().startsWith("Opponent:")))) {
        this.currentRoomNumber = 0
        const detectedRoom = this.detectRoom()

        if (detectedRoom) {
          this.currentRoomName = detectedRoom.room
          this.rooms.push(this.currentRoomName)
          this.detectAndFixChunks(packet.toClient)

          Logger.debug(`You are in room ${this.currentRoomName} (${this.currentRoomNumber})`)
        } else {
          Logger.error("There was an error identifying which room you are in! Please report this.")
        }
      }

      if (text.startsWith("COMPLETED! You completed the parkour")) {
        this.calcSeed(this.rooms, packet.toClient)
      }

      const match = text.match(this.checkpointRegex)

      if (match) {
        this.currentCheckpoint = parseInt(match[1])

        let nextRoomAt = 0
        for (const pastRoom of this.rooms) {
          nextRoomAt += checkpointCount[pastRoom]
        }

        if (this.currentCheckpoint === nextRoomAt) {
          this.splitTracker.roomExit(text, this.currentRoomName, this.currentRoomStartPosition,packet.toClient)
          if (this.rooms.length >= 8) {
            return packet;
          }

          this.currentRoomNumber++
          const detectedRoom = this.detectRoom()

          if (detectedRoom) {
            this.currentRoomName = detectedRoom.room
            this.currentRoomStartPosition = detectedRoom.startPos
            this.rooms.push(this.currentRoomName)
           this.detectAndFixChunks(packet.toClient)
            Logger.debug(`You are in room ${this.currentRoomName} (${this.currentRoomNumber})`)
          } else {
            Logger.error("There was an error identifying which room you are in! Please report this.")
          }
        }
      }
    }
    return packet
  }

  outgoingPacket(packet: Packet): Packet {
    return packet
  }
}
