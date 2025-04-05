import { Client, PacketMeta, ServerClient, states } from "minecraft-protocol";
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

  private updateScoreboard(
    scoreboardMap: CheckpointMap,
  ): { player: string; value: string }[] {
    let used: { [player: string]: boolean } = {};
    let realScoreboard: { player: string; value: string }[] = [];

    const checkpoints = Object.keys(scoreboardMap)
      .map(Number)
      .sort((a, b) => b - a);

    for (const checkpoint of checkpoints) {
      const playersAtCheckpoint = [...scoreboardMap[checkpoint]];

      if (playersAtCheckpoint.length === 0) continue;

      const firstPlayer = playersAtCheckpoint[0];
      const firstPlayerTime = firstPlayer.time;

      if (!used[firstPlayer.player]) {
        realScoreboard.push({
          player: firstPlayer.player,
          value: `${checkpoint}`,
        });
        used[firstPlayer.player] = true;
      }

      for (let i = 1; i < playersAtCheckpoint.length; i++) {
        const playerData = playersAtCheckpoint[i];

        if (used[playerData.player]) continue;

        const timeDiff = playerData.time - firstPlayerTime;

        realScoreboard.push({
          player: playerData.player,
          value: this.formatTimeDiff(timeDiff),
        });

        used[playerData.player] = true;
      }
    }

    return realScoreboard;
  }

  private sendScoreboard(
    scoreboard: { player: string; value: string }[],
    toClient: ServerClient,
  ): void {
    for (let i = 0; i < scoreboard.length; i++) {
      let meta: PacketMeta = {
        name: "scoreboard_team",
        state: states.PLAY,
      };

      let prefix: string;
      let suffix: string = `§e${scoreboard[i].value}`.padStart(16);
      if (scoreboard[i].player == "You") {
        prefix = `§a${i + 1}. §a${scoreboard[i].player}`.padEnd(16);
      } else {
        prefix = `§a${i + 1}. §7${scoreboard[i].player}`
          .substring(0, 16)
          .padEnd(16);
      }

      let data = {
        team: `team_${9 - i}`,
        mode: 2,
        name: `team_${9 - i}`,
        prefix: prefix,
        suffix: suffix,
        friendlyFire: 3,
        nameTagVisibility: "always",
        color: 15,
        players: undefined,
      };

      toClient.write(meta.name, data);
    }
  }

  incomingPacket(packet: Packet): Packet {
    if (packet.meta.name === "respawn") {
      this.clearCheckpoints();
      return packet;
    }

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
      let scoreboard = this.updateScoreboard(this.checkpoints);
      this.sendScoreboard(scoreboard, packet.toClient);

      return packet;
    } else if (packet.meta.name === "scoreboard_team") {
      if (
        packet.data.team &&
        /^team_[2-9]$/.test(packet.data.team) &&
        packet.data.suffix &&
        packet.data.suffix.includes("#")
      ) {
        packet.cancelled = true;
      }

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

    return `+${seconds}.${tenths}`;
  }

  clearCheckpoints() {
    this.checkpoints = {};
    Logger.info("Checkpoint data cleared");
  }
}
