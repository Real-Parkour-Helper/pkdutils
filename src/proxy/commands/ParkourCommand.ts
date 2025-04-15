import { Command } from "../packet/Command"
import { Packet } from "../packet/Packet"

export class ParkourCommand extends Command {
  constructor() {
    super("ParkourCommand", "1.0.0", ["pkd"], [])
  }

  protected handle(args: string[], packet: Packet) {
    packet.toServer.write("chat", { message: "/play duels_parkour_eight" })
  }
}