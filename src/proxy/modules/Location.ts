import { PacketInterceptor, setLocationGetter } from "../packet/PacketInterceptor"
import { Packet } from "../packet/Packet"
import { constructChatMessage } from "../util/packetUtils"
import { Logger } from "../../util/Logger"

/**
 * This is the response you get from hypixel
 * when you do /locraw. The only fixed values are the
 * server, a dynamiclobbyXXX or miniXXX value etc. and
 * (probably) the gametype.
 */
export interface LocationData {
  server: string,
  mode: string | null,
  gametype: string | null,
  map: string | null,
  lobbyname: string | null,
}

export class Location extends PacketInterceptor {
  private static _locationData: LocationData | null = null

  private lastRespawn = 0

  constructor() {
    super("Location", "1.0.0", false)
  }

  private isJSON(str: string): boolean {
    const jsonObjectRegex = /^\s*\{[\s\S]*\}\s*$/
    return jsonObjectRegex.test(str)
  }


  incomingPacket(packet: Packet): Packet {
    if (packet.meta.name === "respawn" && Date.now() - this.lastRespawn > 500) { // don't spam hypixel with /locraw
      this.lastRespawn = Date.now()
      packet.toServer.write("chat", { message: "/locraw" })
      Location._locationData = null
    } else if (packet.meta.name === "chat") {
      const text = constructChatMessage(packet.data.message)
      if (this.isJSON(text) && /.+"server":.+".+".+/.exec(text) && /.+"gametype":.+".+".+/.exec(text)) {
        try {
          const parsed = JSON.parse(text)
          Location._locationData = {
            server: parsed.server,
            mode: parsed.mode,
            gametype: parsed.gametype,
            map: parsed.map,
            lobbyname: parsed.lobbyname
          }
        } catch (e) {
          Logger.error("Failed to parse location data: ", e)
        }
      }
    }

    return packet
  }

  outgoingPacket(packet: Packet): Packet {
    return packet
  }

  static get locationData(): LocationData | null {
    return this._locationData
  }

}

setLocationGetter(() => Location)