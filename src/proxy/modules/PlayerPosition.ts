import { Logger } from "../../util/Logger";
import { Packet } from "../packet/Packet";
import { PacketInterceptor } from "../packet/PacketInterceptor";

export type PlayerPositionData = {
  x: number;
  y: number;
  z: number;
};

/**
 * PlayerPosition class for player position
 */
export class PlayerPosition extends PacketInterceptor {
  private _pos: PlayerPositionData = { x: 0, y: 0, z: 0 };

  get pos(): PlayerPositionData {
    return this._pos;
  }

  constructor() {
    super("PlayerPosition", "1.0.0");
  }

  incomingPacket(packet: Packet): Packet {
    return packet;
  }

  outgoingPacket(packet: Packet): Packet {
    if (packet.meta.name != "position") {
      return packet;
    }

    this._pos.x = packet.data.x;
    this._pos.y = packet.data.y;
    this._pos.z = packet.data.z;

    return packet;
  }
}
