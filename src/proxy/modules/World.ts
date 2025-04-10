import { PacketInterceptor } from "../packet/PacketInterceptor"
import { Packet } from "../packet/Packet"
import { Vec3 } from "vec3"

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

  incomingPacket(packet: Packet): Packet {
    if (packet.meta.name === "respawn") {
      // On switching dimensions / worlds, clear chunks
      World.chunks.clear()
    }

    if (packet.meta.name === "map_chunk") {
      // Handle chunks
      const chunkKey = `${packet.data.x},${packet.data.z}`

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