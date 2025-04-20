import { PacketInterceptor } from "../packet/PacketInterceptor"
import { Packet } from "../packet/Packet"
import { Vec3 } from "vec3"
import { Logger } from "../../util/Logger"

const Chunk = require("prismarine-chunk")("1.8.9")

/**
 * World class for tracking chunk data and storing an
 * internal representation of the game world
 */
export class World extends PacketInterceptor {
  constructor() {
    super("World", "1.0.0", false)
  }

  private static chunks: Map<string, typeof Chunk> = new Map()

  /**
   * Get a block at a given position. This will
   * return null if the block is in a chunk
   * that hasn't been received by the client yet.
   * @param x
   * @param y
   * @param z
   */
  static getBlock(x: number, y: number, z: number) {
    const chunkX = x >> 4
    const chunkZ = z >> 4
    const chunkKey = `${chunkX},${chunkZ}`
    const chunk = World.chunks.get(chunkKey)

    if (!chunk) return null
    const blockX = x & 0xF
    const blockZ = z & 0xF
    const blockY = y & 0xFF // technically not needed, but it's good to make sure it's in a valid range anyway...

    return chunk.getBlock(new Vec3(blockX, blockY, blockZ))
  }

  /**
   * Set a block at a given position. This will modify the chunk that contains that block.
   * @param x
   * @param y
   * @param z
   * @param type
   * @param data
   */
  static setBlock(x: number, y: number, z: number, type: number, data: number) {
    const chunkKey = `${x >> 4},${z >> 4}`
    const chunk = World.chunks.get(chunkKey)
    if (!chunk) return

    const blockX = x & 0xF
    const blockZ = z & 0xF
    const blockY = y & 0xFF

    chunk.setBlockType(new Vec3(blockX, blockY, blockZ), type)
    chunk.setBlockData(new Vec3(blockX, blockY, blockZ), data)
  }

  /**
   * Get a chunk at a given position. This will return null if the chunk does not exist.
   * @param blockX
   * @param blockZ
   */
  static getChunk(blockX: number, blockZ: number): typeof Chunk | null {
    const chunkX = blockX >> 4
    const chunkZ = blockZ >> 4
    const chunkKey = `${chunkX},${chunkZ}`
    return World.chunks.get(chunkKey)
  }

  incomingPacket(packet: Packet): Packet {
    if (packet.meta.name === "respawn") {
      // On switching dimensions / worlds, clear chunks
      World.chunks.clear()
    }

    if (packet.meta.name === "map_chunk") {
      // Handle chunks
      const chunkKey = `${packet.data.x},${packet.data.z}`

      if (packet.data.groundUp && packet.data.bitMap === 0) {
        World.chunks.delete(chunkKey)
        return packet
      }

      // I'm not sure what to do for this, or what the server is trying to achieve here. Maybe a whole chunk update?
      if (World.chunks.has(chunkKey)) return packet

      let chunk = new Chunk()
      chunk.load(packet.data.chunkData, packet.data.bitMap ?? 0xFFFF)
      World.chunks.set(chunkKey, chunk)
    }

    return packet
  }

  outgoingPacket(packet: Packet): Packet {
    return packet
  }
}