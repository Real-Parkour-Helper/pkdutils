import { Packet } from "../packet/Packet";
import { constructChatMessage } from "../util/packetUtils"
import { PacketInterceptor } from "../packet/PacketInterceptor";

export class CodeRoomReplacer extends PacketInterceptor {
  private codeToRoom: Record<string, string>;
  private codeRegex: RegExp;

  constructor() {
    super("CodeRoomReplacer", "1.0.0");
    this.codeToRoom = {
      "3d": "Around Pillars",
      "3b": "Blocks",
      "2b": "Castle Wall",
      "1a": "Early 3+1",
      "4c": "Fence Squeeze",
      "1d": "Fences",
      "3a": "Fortress",
      "4a": "Four Towers",
      "5a": "Ice",
      "2c": "Ladder Slide",
      "4b": "Ladder Tower",
      "3e": "Overhead 4b",
      "2e": "Quartz Climb",
      "5d": "Quartz Temple",
      "5b": "Rng Skip",
      "4d": "Sandpit",
      "2a": "Scatter",
      "5c": "Slime Scatter",
      "4e": "Slime Skip",
      "1b": "Tightrope",
      "1c": "Tower Tightrope",
      "1e": "Triple Platform",
      "3c": "Triple Trapdoors",
      "2d": "Underbridge"
    }; 
    const keys = Object.keys(this.codeToRoom).join('|');
    this.codeRegex = new RegExp(`\\b(${keys})\\b`, 'g');
  }

  incomingPacket(packet: Packet): Packet {
    if (packet.meta.name === "chat") {
        let text = constructChatMessage(packet.data.message);

        const replacedText = text.replace(this.codeRegex, (match) => this.codeToRoom [match]);

        if (replacedText !== text) {
            packet.cancelled = true;

            const roomNumberMatch = text.match(/Room (\d+)/);
            const roomNumber = roomNumberMatch ? parseInt(roomNumberMatch[1], 10) : null;

            const matches = [...text.matchAll(this.codeRegex)]
              .map((m) => m[0])
              .filter((code) => this.codeToRoom[code]);

            if (matches.length < 1) return packet;

            const room1 = this.codeToRoom[matches[0] ?? ""];

            const message = `§8> §7Room ${roomNumber}: §b${room1}§r`

            packet.toClient.write("chat", {
                message: JSON.stringify({ text: message }),
                position: 0
            })
        }
    }

    return packet;
  }

  outgoingPacket(packet: Packet): Packet {
    return packet;
  }
}
