import { PacketInterceptor } from "./PacketInterceptor"
import { Packet } from "./Packet"
import { Logger } from "../../util/Logger"
import { ServerClient } from "minecraft-protocol"

interface CommandArgument {
  name: string
  optional?: boolean
}

/**
 * The base class to easily create a custom
 * command.
 */
export abstract class Command extends PacketInterceptor {
  private readonly commands: string[]
  private readonly args: CommandArgument[]

  /**
   * @param name The name of the command
   * @param version
   * @param commands A list of commands to represent this command (aliases, etc.)
   * @param args A list of arguments this command accepts
   */
  constructor(name: string, version: string, commands: string[], args: CommandArgument[]) {
    super(name, version, false)

    this.commands = commands
    this.args = args

    let hadOptional = false
    for (const arg of args) {
      if (!arg.optional && hadOptional) {
        Logger.error("Command argument order is invalid. Optional arguments must be at the end.")
      }

      if (arg.optional) {
        hadOptional = true
      }
    }
  }

  protected outgoingPacket(packet: Packet): Packet {
    if (packet.meta.name === "chat") {
      const command = packet.data.message.split(" ")[0].substring(1)
      if (!this.commands.includes(command)) {
        return packet
      }

      packet.cancelled = true
      const args = packet.data.message.split(" ").slice(1)
      const passedArgs: string[] = []

      for (const arg of this.args) {
        if (args.length === 0) {
          if (!arg.optional) {
            this.sendUsage(packet.toClient)
            return packet
          }
        } else {
          passedArgs.push(args.shift()!)
        }
      }

      if (args.length > 0) {
        this.sendUsage(packet.toClient)
        return packet
      }

      this.handle(passedArgs, packet)
    }

    return packet
  }

  protected incomingPacket(packet: Packet): Packet {
    return packet
  }

  private sendUsage(toClient: ServerClient) {
    toClient.write("chat", {
      message: JSON.stringify({ text: `§cUsage: /${this.commands[0]} ${this.args.map(arg => arg.optional ? `(${arg.name})` : `<${arg.name}>`).join(" ")}` }),
      position: 0
    })
  }

  protected abstract handle(args: string[], packet: Packet): void
}