import { InstantConnectProxy } from "prismarine-proxy"
import { Client, PacketMeta, ServerClient } from "minecraft-protocol"
import { Logger } from "../util/Logger"
import { favicon } from "./favicon"
import { PacketInterceptor } from "./packet/PacketInterceptor"
import { Packet } from "./packet/Packet"
import { SplitScoreboard } from "./modules/SplitScoreboard"
import { World } from "./modules/World"
import { RoomID } from "./modules/RoomID"
import { SplitTracker } from "./modules/SplitTracker"
import { BoostInterceptor } from "./modules/BoostInterceptor"
import { PlayerPosition } from "./modules/PlayerPosition"
import { Timer } from "./modules/Timer"
import { Location } from "./modules/Location"
import { ParkourCommand } from "./commands/ParkourCommand"
import { ScoreboardCommand } from "./commands/ScoreboardCommand"
import { ToggleAutosaveCommand } from "./commands/ToggleAutosaveCommand"
import { TicTacToe } from "./gui/games/TicTacToe"
import { Connect4 } from "./gui/games/Connect4"
import { Minesweeper } from "./gui/games/Minesweeper"
import { Solitaire } from "./gui/games/Solitaire"
import { WsBackend } from "./backend/WsBackend"
import { CodeRoomReplacer } from "./modules/CodeRoomReplacement"

/**
 * Proxy class
 *
 * Creates an InstantConnectProxy instance, will also handle all packet reading / manipulation
 */
export class Proxy {
  private proxy: InstantConnectProxy;
  private interceptors: PacketInterceptor[] = [];
  private wsBackend: WsBackend | undefined

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

    this.proxy.on("start", (client) => {
      if (this.wsBackend === undefined) {
        this.wsBackend = new WsBackend(client, client.username)
        this.interceptors.push(this.wsBackend)
      }
    })

    this.proxy.on("end", () => {
      if (this.wsBackend) {
        this.wsBackend.close()
        this.wsBackend = undefined;
      }
    })

    this.proxy.on(
      "incoming",
      (
        data: any,
        meta: PacketMeta,
        toClient: ServerClient,
        toServer: Client,
      ) => {
        let packet = new Packet(meta, data, toClient, toServer);
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
    const roomTracker = new RoomID(splitTracker);
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
        new TicTacToe(positionTracker),
        new Connect4(positionTracker),
        new Minesweeper(positionTracker),
        new Solitaire(positionTracker),
        new CodeRoomReplacer()
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
