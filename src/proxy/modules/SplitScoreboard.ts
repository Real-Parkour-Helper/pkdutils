import { Logger } from "../../util/Logger";
import { Packet } from "../packet/Packet";
import { PacketInterceptor } from "../packet/PacketInterceptor";

interface CheckpointData {
  player: string;
  checkpoint: number;
  time: number;
}

interface CheckpointMap {
  [checkpointId: number]: CheckpointData[];
}

export class SplitScoreboard extends PacketInterceptor {
  private checkpoints: CheckpointMap = {};

  constructor() {
    super("SplitScoreboard", "1.0.0");
  }

  private parseCheckpointMessage(message: string): CheckpointData | null {
    const regex = /CHECKPOINT! (.*) reached checkpoint (\d+) in ([\d:\.]+)!/;
    const match = message.match(regex);

    if (!match) return null;

    return {
      player: match[1],
      checkpoint: parseInt(match[2], 10),
      time: this.timeToMilliseconds(match[3]),
    };
  }

  private timeToMilliseconds(timeStr: string): number {
    const parts = timeStr.split(":");
    const minutes = parseInt(parts[0], 10);
    const secondsParts = parts[1].split(".");
    const seconds = parseInt(secondsParts[0], 10);
    const milliseconds = parseInt(secondsParts[1], 10);

    return minutes * 60 * 1000 + seconds * 1000 + milliseconds;
  }

  private constructChatMessage(message: any): string {
    let msgJson: any;
    try {
      msgJson = JSON.parse(message);
    } catch (error) {
      Logger.error("Failed to parse chat message as JSON:", error);
      return "";
    }

    let textArr = [msgJson.text ?? ""];
    if (msgJson.extra) {
      for (let e of msgJson.extra) {
        textArr.push(e.text ?? "");
      }
    }

    let fullText = textArr.join("");
    return fullText;
  }

  incomingPacket(packet: Packet): Packet {
    if (packet.meta.name === "chat") {
      let text = this.constructChatMessage(packet.data.message);

      if (text.includes("You completed the parkour")) {
        this.clearCheckpoints();
        return packet;
      }

      const checkpointData = this.parseCheckpointMessage(text);
      if (checkpointData === null) {
        return packet;
      }

      if (!this.checkpoints[checkpointData.checkpoint]) {
        this.checkpoints[checkpointData.checkpoint] = [];
      }
      this.checkpoints[checkpointData.checkpoint].push(checkpointData);

      return packet;
    }

    return packet;
  }

  outgoingPacket(packet: Packet): Packet {
    return packet;
  }

  private formatTimeDiff(timeDiffMs: number): string {
    const absoluteTimeDiff = Math.abs(timeDiffMs);

    const roundedMs = Math.round(absoluteTimeDiff / 100) * 100;

    const seconds = Math.floor(roundedMs / 1000);
    const milliseconds = roundedMs % 1000;

    const tenths = Math.floor(milliseconds / 100);

    return `$+${seconds}.${tenths}`;
  }

  clearCheckpoints() {
    this.checkpoints = {};
    Logger.info("Checkpoint data cleared");
  }
}
