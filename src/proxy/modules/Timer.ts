import { Logger } from "../../util/Logger";
import { Packet } from "../packet/Packet";
import { PacketInterceptor } from "../packet/PacketInterceptor";
import { splitToMs } from "../util/splitUtils";

/**
 * Timer class for recording the current value of the timer
 */
export class Timer extends PacketInterceptor {
  private timeRegex: RegExp = /((\d{2}):(\d{2}).(\d{3}))/;
  private _currentTime: number = 0;

  get currentTime(): number {
    return this._currentTime;
  }

  constructor() {
    super("Timer", "1.0.0");
  }

  incomingPacket(packet: Packet): Packet {
    if (packet.meta.name == "respawn") {
      this._currentTime = 0;
      return packet;
    }

    if (packet.meta.name != "chat" || packet.data.position != 2) {
      return packet;
    }

    const match = packet.data.message.match(this.timeRegex);
    if (!match) {
      return packet;
    }

    const timeStr = match[0];
    this._currentTime = splitToMs(timeStr);

    return packet;
  }

  outgoingPacket(packet: Packet): Packet {
    return packet;
  }
}
