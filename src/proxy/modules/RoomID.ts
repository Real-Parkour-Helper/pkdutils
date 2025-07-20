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
import { startRoomBlocks } from "../data/startRoom"
import { finishRoomBlocks } from "../data/finishRoom"
import { Run, RunStore } from "./RunStore"
import { splitToMs } from "../util/splitUtils"
import { Location } from "./Location"

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
  private runStartedAt: number | null = null

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

    const zAddend = 57 * this.currentRoomNumber + 1
    const startPos = new Vec3(0, 0, zAddend).add(this.startPosition)

    const missingChunkKeys = new Set<string>()
    const roomData = roomBlocks[this.currentRoomName]

    for (const [colKey, yMap] of Object.entries(roomData.columns)) {
      const [xOffStr, zOffStr] = colKey.split(',')
      const xOff = parseInt(xOffStr, 10)
      const zOff = parseInt(zOffStr, 10)

      for (const [yOffStr, blockDesc] of Object.entries(yMap)) {
        const yOff = parseInt(yOffStr, 10)

        const absX = startPos.x + xOff
        const absY = startPos.y + yOff
        const absZ = startPos.z + zOff

        const chunkX = absX >> 4
        const chunkZ = absZ >> 4
        const key = `${chunkX},${chunkZ}`

        if (missingChunkKeys.has(key)) break

        const blk = World.getBlock(absX, absY, absZ)
        const expectedName = blockDesc.split(':')[0]

        if (blk === null || blk.name !== expectedName) {
          missingChunkKeys.add(key)
          break
        }
      }
    }


    // Detect missing 0,0 and 1,0 chunks if the start room was filled in
    const blockAtStart = World.getBlock(startPos.x, startPos.y, startPos.z)
    const otherBlockAtStart = World.getBlock(startPos.x - 3, startPos.y, startPos.z)

    if (blockAtStart?.name === "air" && !missingChunkKeys.has("1,0")) {
      missingChunkKeys.add("1,0")
    }

    if (otherBlockAtStart?.name === "air" && !missingChunkKeys.has("0,0")) {
      missingChunkKeys.add("0,0")
    }

    return Array.from(missingChunkKeys)
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

      const worldChunk = World.getChunk(chunkX * 16, chunkZ * 16)
      const chunk = worldChunk || new Chunk()

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

      if (!worldChunk) {
        World.setChunk(chunkKey, chunk)
      }
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
   * Detects and fixes any missing chunks that belong to the start room
   * @param toClient
   * @private
   */
  private detectFixStartRoomChunks(toClient: ServerClient) {
    const chunksToCheck = ["0,0", "1,0"]
    const needsFixing = []

    for (const chunkKey of chunksToCheck) {
      const [x,z] = chunkKey.split(",").map(Number).map(num => num * 16)

      const block = World.getBlock(x, 0, z)
      if (block === null) {
        needsFixing.push(chunkKey)
      }
    }

    if (needsFixing.length > 0) {
      const startPos = new Vec3(0, 0, 1).add(this.startPosition.clone()) // bruh

      for (const chunkKey of needsFixing) {
        const [chunkX, chunkZ] = chunkKey.split(",").map(Number)

        const worldChunk = World.getChunk(chunkX * 16, chunkZ * 16)
        const chunk = worldChunk || new Chunk()
        const columns = startRoomBlocks.columns

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
        toClient.write("map_chunk", data)
        toClient.write("chat", {
          message: JSON.stringify({ text: `§9§lFixed a missing chunk in the start room!` }),
          position: 0
        })

        if (!worldChunk) {
          World.setChunk(chunkKey, chunk)
        }
      }
    }
  }

  /**
   * Detects and fixes any missing chunks that belong to the finish room
   * @param toClient
   * @private
   */
  private detectFixFinishRoomChunks(toClient: ServerClient) {
    const zAddend = 57 * 8
    const startPos = new Vec3(0, 0, zAddend).add(this.startPosition)

    const needsFixing: string[] = []

    for (const [colKey, yMap] of Object.entries(finishRoomBlocks.columns)) {
      const [x, z] = colKey.split(",").map(Number)

      if (z == -5) continue // skip this wall section because wall patterns can be different

      const worldX = startPos.x + x
      const worldZ = startPos.z + z

      const chunkX = worldX >> 4
      const chunkZ = worldZ >> 4
      const chunkKey = `${chunkX},${chunkZ}`

      if (needsFixing.includes(chunkKey)) continue

      for (const [yOffset, block] of Object.entries(yMap)) {
        const y = parseInt(yOffset, 10) + startPos.y

        const actual = World.getBlock(worldX, y, worldZ)

        if (!actual || actual.name === "air") {
          needsFixing.push(chunkKey)
          break
        }
      }
    }

    if (needsFixing.length === 0) return

    // 5) Repair each missing chunk exactly as before
    for (const chunkKey of needsFixing) {
      const [chunkX, chunkZ] = chunkKey.split(',').map(Number)
      const worldChunk = World.getChunk(chunkX * 16, chunkZ * 16)
      const chunk = worldChunk ?? new Chunk()

      for (const [colKey, yMap] of Object.entries(finishRoomBlocks.columns)) {
        const [xOffStr, zOffStr] = colKey.split(',')
        const xOff = parseInt(xOffStr, 10)
        const zOff = parseInt(zOffStr, 10)

        const worldX = startPos.x + xOff
        const worldZ = startPos.z + zOff
        if ((worldX >> 4) !== chunkX || (worldZ >> 4) !== chunkZ) continue

        const localX = worldX & 0xF
        const localZ = worldZ & 0xF

        for (const [yOffStr, blockDesc] of Object.entries(yMap)) {
          const yOff = parseInt(yOffStr, 10)
          const worldY = startPos.y + yOff

          const [name, meta] = blockDesc.split(':')
          const def = registry.blocksByName[name]
          if (!def) {
            Logger.error(`Unknown block "${name}" in finishRoomBlocks`)
            continue;
          }

          chunk.setBlockType(new Vec3(localX, worldY, localZ), def.id)
          chunk.setBlockData(new Vec3(localX, worldY, localZ), meta ? parseInt(meta, 10) : 0)
        }
      }

      console.log("Writing chunk packet")
      // push the repaired chunk to the client
      toClient.write('map_chunk', {
        x: chunkX,
        z: chunkZ,
        groundUp: true,
        bitMap: 0xFFFF,
        chunkData: chunk.dump()
      })
      toClient.write('chat', {
        message: JSON.stringify({
          text: `§9§lFixed a missing chunk in the finish room!`
        }),
        position: 0
      })

      // store it if it wasn’t loaded
      if (!worldChunk) {
        World.setChunk(chunkKey, chunk)
      }
    }
  }

  /**
   * Sends the seed to Parkour Duels Bot and returns the optimal result
   * @private
   */
  private calcSeed(seed: RoomName[], time: number, toClient: ServerClient) {
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

      const run: Run = {
        seed: Location.locationData?.server || "unknown",
        rooms: seed,
        splits: this.splitTracker.currentSplits,
        totalTime: time,
        calc: data,
        timestamp: this.runStartedAt
      }

      console.log(run)
      RunStore.getInstance().addRun(run)

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
      this.runStartedAt = null;
    }

    if (packet.meta.name === "chat") {
      const text = constructChatMessage(packet.data.message)
      if ((text.startsWith(" ") && (text.trim().startsWith("Opponents:") || text.trim().startsWith("Opponent:")))) {
        this.runStartedAt = Date.now()

        this.detectFixStartRoomChunks(packet.toClient)

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
        const match = text.match(/(\d{2}:\d{2}\.\d{3})/)
        if (!match) {
          Logger.error("Could not find completed regex match in text: " + text)
          return packet
        }
        console.log(match)
        const time = splitToMs(match[1])
        console.log(time)
        this.calcSeed(this.rooms, time, packet.toClient)
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

          if (this.currentRoomNumber == 7) {
            console.log("Checking for missing chunks in the finish room...")
            this.detectFixFinishRoomChunks(packet.toClient)
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
