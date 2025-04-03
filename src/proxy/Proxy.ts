import { InstantConnectProxy } from "prismarine-proxy"
import { PacketMeta, ServerClient, Client } from "minecraft-protocol"
import { Logger } from "../util/Logger"
import { favicon } from "./favicon"

/**
 * Proxy class
 *
 * Creates an InstantConnectProxy instance, will also handle all packet reading / manipulation
 */
export class Proxy {
  private proxy: InstantConnectProxy

  constructor() {
    this.proxy = new InstantConnectProxy({
      loginHandler: (client) => ({ username: client.username, auth: "microsoft" }),
      serverOptions: {
        host: "127.0.0.1",
        port: 25565,
        version: "1.8.9", // we can remove this when version independent stuff works
        validateChannelProtocol: false,
        motd: "§9§lWe promise, the blocks (probably) won't move",
        maxPlayers: 1,
        favicon
      },
      clientOptions: {
        version: "1.8.9",
        host: "hypixel.net"
      },
    })

    this.proxy.on("incoming", (data: any, meta: PacketMeta, toClient: ServerClient, toServer: Client) => {
      // Forward all packets to the client
      // This is where we'll add our packet handlers later
      toClient.write(meta.name, data)
    })

    this.proxy.on("outgoing", (data: any, meta: PacketMeta, toClient: ServerClient, toServer: Client) => {
      // Forward all packets to the server
      toServer.write(meta.name, data)
    })

    Logger.info(`Proxy started! Listening on port 25565.`)
  }
}