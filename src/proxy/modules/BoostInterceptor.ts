import { Logger } from "../../util/Logger";
import { Packet } from "../packet/Packet";
import { PacketInterceptor } from "../packet/PacketInterceptor";
import { PlayerPosition } from "./PlayerPosition";
import { SplitTracker } from "./SplitTracker";
import { Timer } from "./Timer";

/**
 * BoostInterceptor class for keeping track of when player uses his boost
 */
export class BoostInterceptor extends PacketInterceptor {
  private splitTracker: SplitTracker;
  private positionTracker: PlayerPosition;
  private timer: Timer;

  private lastBoostTime: number = 0;

  constructor(
    splitTracker: SplitTracker,
    positionTracker: PlayerPosition,
    timer: Timer,
  ) {
    super("BoostInterceptor", "1.0.0");
    this.splitTracker = splitTracker;
    this.positionTracker = positionTracker;
    this.timer = timer;
  }

  incomingPacket(packet: Packet): Packet {
    if (packet.meta.name === "experience" && packet.data.level === 60 && Date.now() - this.lastBoostTime > 5000) { // 5000 just in case some packets are really really delayed
      this.lastBoostTime = Date.now()
      this.splitTracker.recordBoost(
        this.positionTracker.pos,
        this.timer.currentTime,
      );
    }

    return packet;
  }

  outgoingPacket(packet: Packet): Packet {
    return packet;
  }
}
