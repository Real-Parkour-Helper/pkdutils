import { WebSocket } from "ws"
import { Client, ServerClient } from "minecraft-protocol"
import { Logger } from "../../util/Logger"
import { PacketInterceptor } from "../packet/PacketInterceptor"
import { Packet } from "../packet/Packet"
import { constructChatMessage } from "../util/packetUtils"

enum ChatChannel {
  ALL = "all",
  GUILD = "guild",
  PARTY = "party",
  JOHN = "john"
}

// parse "You are now in the [...] channel"
const chatChannelRegex = /You are now in the (.+) channel/

export class WsBackend extends PacketInterceptor {
  private client: ServerClient
  private ws: WebSocket
  private username: string

  private channel: ChatChannel = ChatChannel.ALL
  private lastDMFrom: string | null = null
  private allowDMs: boolean = true
  private showMessages: boolean = true

  constructor(client: ServerClient, username: string) {
    super("WsBackend", "1.0.0", false, [])
    this.client = client
    this.username = username
    this.ws = new WebSocket("wss://api.parkourduels.com/johnchat")

    this.ws.on("open", () => {
      Logger.info("Connected to WS server!")
      this.ws.send(JSON.stringify({
        op: "presence",
        username: username,
      }))
    })

    this.ws.on("message", (data) => {
      try {
        const msg = JSON.parse(data.toString())
        if (msg.op === "chat") {
          const sender = msg.sender
          const content = msg.content
          const dm = msg.to !== undefined && msg.to !== null

          const prefix = !dm ?
            `§9John§r §8> §d${sender}§r:` :
            `§9JOHN DM§r §8> §d${sender}§8->§r §d${msg.to}§r:`

          if (dm && msg.sender !== this.username) {
            if (this.lastDMFrom !== sender) {
              this.lastDMFrom = sender
            }
          }

          if (!dm) {
            if (this.showMessages) {
              this.writeChat(`${prefix} ${content}`)
            }
          } else {
            if (this.allowDMs) {
              this.writeChat(`${prefix} ${content}`)
            } else {
              this.ws.send(JSON.stringify({
                op: "chat",
                sender: this.username,
                content: `§cHey! I hate you personally, so I don't receive dms from you at this point. Don't message me!`,
                to: sender
              }))
            }
          }
        } else if (msg.op === "presence") {
          const prefix = "§9John§r §8>"
          if (msg.type === "join") {
            this.writeChat(`${prefix} §d${msg.username}§r joined.`)
          } else if (msg.type === "leave") {
            this.writeChat(`${prefix} §d${msg.username}§r left.`)
          } else if (msg.type === "online") {
            const list = msg.others
              .map((user: { username: string }) => `§d${user.username}§r`)
              .join(", ")
            this.writeChat(`${prefix} Online: ${list}`)
          }
        }
      } catch (err) {
        Logger.warn(`Failed to parse WS message: ${err}`)
      }
    })

    this.ws.on("close", (code, reason) => {
      Logger.warn(`WS connection closed: ${code} - ${reason.toString()}`)
    })

    this.ws.on("error", (error) => {
      Logger.error(`WS error: ${error.message}`)
    })
  }

  close() {
    if (this.ws.readyState === WebSocket.OPEN) {
      Logger.info("Closing WS connection...")
      this.ws.close()
    }
  }

  private writeChat(message: string) {
    this.client.write("chat", {
      message: JSON.stringify({ text: message }),
      position: 0
    })
  }

  protected incomingPacket(packet: Packet): Packet {
    if (packet.meta.name === "chat") {
      const message = constructChatMessage(packet.data.message)

      // Parse the chat channel from the message
      const channelMatch = chatChannelRegex.exec(message)
      if (channelMatch) {
        const channelName = channelMatch[1].toLowerCase()
        if (Object.values(ChatChannel).includes(channelName as ChatChannel)) {
          this.channel = channelName as ChatChannel
          return packet
        }
      }
    }
    return packet
  }

  protected outgoingPacket(packet: Packet): Packet {
    if (packet.meta.name === "chat") {
      if (packet.data.message.startsWith("/chat")) {
        const channel = packet.data.message.split(" ")[1]?.toLowerCase()
        if (channel === "all" || channel === "a") {
          this.channel = ChatChannel.ALL
        } else if (channel === "guild" || channel === "g") {
          this.channel = ChatChannel.GUILD
        } else if (channel === "party" || channel === "p") {
          this.channel = ChatChannel.PARTY
        } else if (channel === "john" || channel === "j") {
          packet.cancelled = true
          this.channel = ChatChannel.JOHN
          this.writeChat("§aYou are now in the §6JOHN§a channel.")
        }
      }

      if (packet.data.message.startsWith("/jc")) {
        packet.cancelled = true
        const message = packet.data.message.slice(4).trim()
        this.ws.send(JSON.stringify({
          op: "chat",
          sender: this.username,
          content: message
        }))
      }

      if (packet.data.message.startsWith("/j dm")) {
        packet.cancelled = true
        const parts = packet.data.message.split(" ")
        if (parts.length < 4) {
          this.writeChat("§cUsage: /j dm <username> <message>")
          return packet
        }
        const recipient = parts[2]
        const message = parts.slice(3).join(" ")
        this.ws.send(JSON.stringify({
          op: "chat",
          sender: this.username,
          content: message,
          to: recipient
        }))
      }

      if (packet.data.message.startsWith("/j r") || packet.data.message.startsWith("/j reply")) {
        packet.cancelled = true
        if (this.lastDMFrom) {
          const parts = packet.data.message.split(" ")
          if (parts.length < 3) {
            this.writeChat("§cUsage: /j r <message>")
            return packet
          }
          this.ws.send(JSON.stringify({
            op: "chat",
            sender: this.username,
            content: parts.slice(2).join(" "),
            to: this.lastDMFrom
          }))
        } else {
          this.writeChat("§cNo recent DM to reply to.")
        }
      }

      if (!packet.data.message.startsWith("/") && this.channel === ChatChannel.JOHN) {
        packet.cancelled = true
        this.ws.send(JSON.stringify({
          op: "chat",
          sender: this.username,
          content: packet.data.message
        }))
      }

      if (packet.data.message.startsWith("/j toggledm") || packet.data.message.startsWith("/john toggledm")) {
        packet.cancelled = true
        this.allowDMs = !this.allowDMs
        const status = this.allowDMs ? "§2enabled" : "§cdisabled"
        this.writeChat(`§aJohn DMs are now ${status}.`)
      } else if (packet.data.message.startsWith("/j toggle") || packet.data.message.startsWith("/john toggle")) {
        packet.cancelled = true
        this.showMessages = !this.showMessages
        const status = this.showMessages ? "§2enabled" : "§cdisabled"
        this.writeChat(`§aJohn chat messages are now ${status}.`)
      }


    }
    return packet
  }
}