import { InstantConnectProxy } from "prismarine-proxy";
import { PacketMeta, ServerClient, Client } from "minecraft-protocol";
import { Logger } from "../util/Logger";
import { favicon } from "./favicon";
import { PacketInterceptor } from "./packet/PacketInterceptor";
import { Packet } from "./packet/Packet";
import { SplitScoreboard } from "./modules/SplitScoreboard";
import { World } from "./modules/World";
import { RoomID } from "./modules/RoomID";
import { SplitTracker } from "./modules/SplitTracker";
import { BoostInterceptor } from "./modules/BoostInterceptor";
import { PlayerPosition } from "./modules/PlayerPosition";
import { Timer } from "./modules/Timer";
import { Location } from "./modules/Location";
import { ParkourCommand } from "./commands/ParkourCommand";
import { ScoreboardCommand } from "./commands/ScoreboardCommand";
import { ToggleAutosaveCommand } from "./commands/ToggleAutosaveCommand";

const registry = require("prismarine-registry")("1.8.9")

/**
 * Proxy class
 *
 * Creates an InstantConnectProxy instance, will also handle all packet reading / manipulation
 */
export class Proxy {
  private proxy: InstantConnectProxy;
  private interceptors: PacketInterceptor[] = [];

  constructor() {
    this.proxy = new InstantConnectProxy({
      loginHandler: (client) => ({
        username: client.username,
        auth: "microsoft",
      }),
      serverOptions: {
        host: "127.0.0.1",
        port: 25565,
        version: "1.8.9", // we can remove this when version independent stuff works
        validateChannelProtocol: false,
        motd: "§9We promise, the blocks §lprobably§r§9 won't move",
        maxPlayers: 1,
        favicon,
      },
      clientOptions: {
        version: "1.8.9",
        host: "hypixel.net",
      },
    });

    this.registerInterceptors();
    this.registerCommands();

    let id: number | undefined = undefined
    let aliveFallingEntities: number[] = []

    this.proxy.on(
      "incoming",
      (
        data: any,
        meta: PacketMeta,
        toClient: ServerClient,
        toServer: Client,
      ) => {
        let packet = new Packet(meta, data, toClient, toServer);

        if (packet.meta.name === "spawn_entity") {
          if (packet.data.type === 70) {
            const pos = { x: packet.data.x / 32, y: packet.data.y / 32, z: packet.data.z / 32 }
            const objectData = packet.data.objectData.intField
            const blockId = objectData & 0xFFF        // lower 12 bits
            const blockData = (objectData >> 12) & 0xF // upper 4 bits

            const block = registry.blocks[blockId]
            if (block) {
              aliveFallingEntities.push(packet.data.entityId)
            } else {
              Logger.debug(`Unknown block ID: ${blockId} (${objectData})`)
            }
          }
        }

        if (packet.meta.name === "destroy_entity") {
          if (aliveFallingEntities.includes(packet.data.entityId)) {
            aliveFallingEntities = aliveFallingEntities.filter(id => id !== packet.data.entityId)
          }
        }

        for (const interceptor of this.interceptors) {
          try {
            packet = interceptor.in(packet);
          } catch (error) {
            Logger.error(
              `Error in (incoming) interceptor ${interceptor.name}: ${error}`,
            );
          }
        }

        if (!packet.cancelled) {
          toClient.write(meta.name, data);
        }
      },
    );

    this.proxy.on(
      "outgoing",
      (
        data: any,
        meta: PacketMeta,
        toClient: ServerClient,
        toServer: Client,
      ) => {
        // Forward all packets to the server
        let packet = new Packet(meta, data, toClient, toServer);

        if (packet.meta.name === "chat") {
          if (packet.data.message === "/killblocks") {
            packet.cancelled = true
            if (aliveFallingEntities.length > 0) {
              toClient.write("entity_destroy", {
                entityIds: aliveFallingEntities,
              })
              aliveFallingEntities = []

              toClient.write("chat", {
                message: JSON.stringify({ text: "§aKilled all falling blocks!" }),
                position: 0,
              })
            } else {
              toClient.write("chat", {
                message: JSON.stringify({ text: "§cNo falling blocks to kill!" }),
                position: 0,
              })
            }
          }
        }

        for (const interceptor of this.interceptors) {
          try {
            packet = interceptor.out(packet);
          } catch (error) {
            Logger.error(
              `Error in (outgoing) interceptor ${interceptor.name}: ${error}`,
            );
          }
        }

        if (!packet.cancelled) {
          toServer.write(meta.name, data);
        }
      },
    );

    Logger.info(`Proxy started! Listening on port 25565.`);
  }

  /**
   * Registers the interceptors the proxy should use.
   * @private
   */
  private registerInterceptors() {
    const positionTracker = new PlayerPosition();
    const splitTracker = new SplitTracker();
    const roomTracker = new RoomID(splitTracker, positionTracker);
    const timer = new Timer();
    this.interceptors.push(
      ...[
        new Location(),
        new World(),
        roomTracker,
        new SplitScoreboard(roomTracker),
        positionTracker,
        timer,
        new BoostInterceptor(splitTracker, positionTracker, timer),
      ],
    );
  }

  /**
   * Registers the commands the proxy should use.
   * @private
   */
  private registerCommands() {
    this.interceptors.push(
      ...[
        new ParkourCommand(),
        new ScoreboardCommand(),
        new ToggleAutosaveCommand(),
      ],
    );
  }
}
