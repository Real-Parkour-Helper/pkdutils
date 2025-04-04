import { PacketInterceptor } from "../packet/PacketInterceptor"
import { Packet } from "../packet/Packet"
import * as fs from "node:fs"

/**
 * World class for tracking chunk data and storing an
 * internal representation of the game world
 */
export class World extends PacketInterceptor {
  constructor() {
    super("World", "1.0.0")
  }

  incomingPacket(packet: Packet): Packet {
    if (packet.meta.name === "map_chunk") {
      // Handle chunks
    }

    return packet
  }

  outgoingPacket(packet: Packet): Packet {
    return packet
  }
}