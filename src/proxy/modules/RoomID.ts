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
import { bridgeBlocks, previousBridgeBlocks } from "../data/bridgeBlocks"
import { PlayerPosition } from "./PlayerPosition"

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
  private playerPosition: PlayerPosition
  private calcUrl = "https://wired-cod-kindly.ngrok-free.app/api/pkdutils/calc"

  get GetCurrentRoomNumber(): number {
    return this.currentRoomNumber;
  }

  constructor(splitTracker: SplitTracker, playerPosition: PlayerPosition) {
    super("RoomID", "1.0.0", true, ["respawn", "chat"])
    this.splitTracker = splitTracker
    this.playerPosition = playerPosition
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
      const allBlocks = { ...columns, ...bridgeBlocks, ...(this.currentRoomNumber !== 0 ? previousBridgeBlocks : {}) }
      for (const [columnKey, yMap] of Object.entries(allBlocks)) {
        const [x, z] = columnKey.split(",").map(Number)
        const columnPos = new Vec3(x, 0, z).add(startPos)

        if (columnPos.x >> 4 !== chunkX || columnPos.z >> 4 !== chunkZ) {
          continue // this column doesn't belong in this chunk
        }

        const localX = columnPos.x & 0xF
        const localZ = columnPos.z & 0xF

        for (const [yStr, block] of Object.entries(yMap)) {
          const y = parseInt(yStr, 10) + columnPos.y

          const [blockName, blockData] = block.split(":")

          const blockDef = registry.blocksByName[blockName]
          if (!blockDef) {
            Logger.error(`Block ${blockName} not found in registry`)
            continue
          }

          const blockID = blockDef.id
          chunk.setBlockType(new Vec3(localX, y, localZ), blockID)
          chunk.setBlockData(new Vec3(localX, y, localZ), blockData ? parseInt(blockData, 10) : 0)
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
      const packets = this.fixChunks(missingChunks)
      for (const chunkPacket of packets) {
        toClient.write("map_chunk", chunkPacket)
        toClient.write("chat", {
          message: JSON.stringify({ text: `§9§lFixed a missing chunk!` }),
          position: 0
        })
      }
    }
  }

  /**
   * Replaces the door with air blocks to fix door glitches
   * @param toClient
   * @private
   */
  private replaceDoorWithAir(toClient: ServerClient) {
    // const zAddend = 57 * (this.currentRoomNumber - 1)
    // const startPos = new Vec3(0, 0, zAddend).add(this.startPosition)
    // const doorCenterPos = new Vec3(0, 1, 54).add(startPos)

    const pos = this.playerPosition.pos
    const startPos = new Vec3(Math.floor(pos.x), Math.floor(pos.y), Math.floor(pos.z))
    const doorBlockCoordinates: Vec3[] = []

    for (let x = -2; x <= 2; x++) {
      for (let z = 1; z <= 2; z++) {
        for (let y = 0; y < 5; y++) {
          const pos = new Vec3(x, y, z).add(startPos)
          doorBlockCoordinates.push(pos)
        }
      }
    }

    doorBlockCoordinates.forEach(pos => {
      World.setBlock(pos.x, pos.y, pos.z, registry.blocksByName["air"].id, 0)
    })

    const doorChunks: string[] = []
    for (const pos of doorBlockCoordinates) {
      const chunkKey = `${pos.x >> 4},${pos.z >> 4}`
      if (!doorChunks.includes(chunkKey)) {
        doorChunks.push(chunkKey)

        const chunk = World.getChunk(pos.x, pos.z)
        if (chunk) {
          const chunkData = chunk.dump()
          toClient.write("map_chunk", {
            x: pos.x >> 4,
            z: pos.z >> 4,
            groundUp: true,
            bitMap: 0xFFFF,
            chunkData: chunkData
          })
        }
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
      
      let calcRooms = [];
      for (let i = 0; i < 8; i++) {
        calcRooms.push(`room_${i + 1}: ${this.rooms[i]}`);
      }
      
      toClient.write("chat", {
        message: JSON.stringify({ text: "" }),
        position: 0
      });
      
      // TODO: not sure if this is outputted in a single line
      // if it's not then you can't copy it so it's USELESS
      // toClient.write("chat", {
      //   message: JSON.stringify({ text: "§9Calc command for the discord bot:" }),
      //   position: 0
      // });
      
      const command = `/calc ${calcRooms.join(" ")}`
      // toClient.write("chat", {
      //   message: JSON.stringify({ text: command }),
      //   position: 0
      // });
      console.log(command);
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
      this.currentRoomStartPosition = this.startPosition;
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
    if (packet.meta.name === "chat") {
      if (packet.data.message === "/cleardoor") {
        this.replaceDoorWithAir(packet.toClient)
        packet.cancelled = true
        packet.toClient.write("chat", {
          message: JSON.stringify({ text: "§9Cleared some blocks in front of you!" }),
          position: 0
        })
      }
    }
    return packet
  }
}
