import { Logger } from "../../util/Logger";
import { Packet } from "../packet/Packet";
import { PacketInterceptor } from "../packet/PacketInterceptor";
import { SplitTracker } from "./SplitTracker";

/**
 * BoostInterceptor class for keeping track of when player uses his boost
 */
export class BoostInterceptor extends PacketInterceptor {
  private entityId: number = 0;
  private splitTracker: SplitTracker;

  constructor(splitTracker: SplitTracker) {
    super("BoostInterceptor", "1.0.0");
    this.splitTracker = splitTracker;
  }

  incomingPacket(packet: Packet): Packet {
    if (packet.meta.name == "login" && packet.data.gameMode == 2) {
      this.entityId = packet.data.entityId;
      Logger.debug(`Player ${this.entityId} logged in`);
      return packet;
    }

    if (
      packet.meta.name == "entity_velocity" &&
      packet.data.entityId == this.entityId
    ) {
      Logger.debug(JSON.stringify(packet.data));
    }

    if (
      packet.meta.name != "entity_velocity" ||
      packet.data.entityId != this.entityId ||
      (packet.data.velocityX == 0 &&
        packet.data.velocityY == 0 &&
        packet.data.velocityZ == 0)
    ) {
      return packet;
    }

    this.splitTracker.recordBoost();
    return packet;
  }

  outgoingPacket(packet: Packet): Packet {
    return packet;
  }
}
