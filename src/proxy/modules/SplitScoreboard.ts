import { Client, PacketMeta, ServerClient, states } from "minecraft-protocol";
import { Logger } from "../../util/Logger";
import { Packet } from "../packet/Packet";
import { PacketInterceptor } from "../packet/PacketInterceptor";
import { constructChatMessage } from "../util/packetUtils";

interface CheckpointData {
  color: string;
  player: string;
  checkpoint: number;
  time: number;
  disconnected: boolean;
  completed: boolean;
}

interface ScoreboardEntry {
  color: string;
  player: string;
  value: string;
}

interface CheckpointMap {
  [checkpointId: number]: CheckpointData[];
}

export class SplitScoreboard extends PacketInterceptor {
  private gameStarted: boolean = false;
  private checkpoints: CheckpointMap = {};
  private colorToChatCode: Record<string, string> = {
    gray: "§7",
    gold: "§6",
    green: "§a",
    aqua: "§b",
  };

  constructor() {
    super("SplitScoreboard", "1.0.0");
  }

  private parseCheckpointMessage(
    message: string,
    color: string,
  ): CheckpointData | null {
    const regex = /CHECKPOINT! (.*) reached checkpoint (\d+) in ([\d:\.]+)!/;
    const match = message.match(regex);

    if (!match) return null;

    return {
      color: color,
      player: match[1],
      checkpoint: parseInt(match[2], 10),
      time: this.timeToMilliseconds(match[3]),
      disconnected: false,
      completed: false,
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

  private getPlayerColor(message: any): string {
    let msgJson: any;
    try {
      msgJson = JSON.parse(message);
    } catch (error) {
      Logger.error("Failed to parse chat message as JSON:", error);
      return "";
    }

    if (msgJson.extra && msgJson.extra.length >= 2) {
      if (msgJson.extra[0].text.trim() != "CHECKPOINT!") {
        return "";
      }

      const color = msgJson.extra[1].color;
      return color;
    }

    return "";
  }

  private updateScoreboard(scoreboardMap: CheckpointMap): ScoreboardEntry[] {
    let used: { [player: string]: boolean } = {};
    let realScoreboard: ScoreboardEntry[] = [];

    const checkpoints = Object.keys(scoreboardMap)
      .map(Number)
      .sort((a, b) => b - a);

    for (const checkpoint of checkpoints) {
      const playersAtCheckpoint = scoreboardMap[checkpoint];

      if (playersAtCheckpoint.length === 0) continue;

      let firstPlayerIndex = -1;
      for (let i = 0; i < playersAtCheckpoint.length; i++) {
        if (!playersAtCheckpoint[i].disconnected) {
          firstPlayerIndex = i;
          break;
        }
      }

      if (firstPlayerIndex == -1) {
        continue;
      }

      const firstPlayer = playersAtCheckpoint[firstPlayerIndex];
      const firstPlayerTime = firstPlayer.time;

      if (!used[firstPlayer.player]) {
        realScoreboard.push({
          color: firstPlayer.color,
          player: firstPlayer.player,
          value: firstPlayer.completed ? "§e§lDONE" : `#${checkpoint}`,
        });
        used[firstPlayer.player] = true;
      }

      for (let i = firstPlayerIndex + 1; i < playersAtCheckpoint.length; i++) {
        const playerData = playersAtCheckpoint[i];

        if (used[playerData.player] || playerData.disconnected) continue;

        const timeDiff = playerData.time - firstPlayerTime;

        realScoreboard.push({
          color: playerData.color,
          player: playerData.player,
          value: playerData.completed
            ? "§e§lDONE"
            : this.formatTimeDiff(timeDiff),
        });

        used[playerData.player] = true;
      }
    }

    return realScoreboard;
  }

  private sendScoreboard(
    scoreboard: { color: string; player: string; value: string }[],
    toClient: ServerClient,
  ): void {
    for (let i = 0; i < scoreboard.length; i++) {
      let prefix: string;
      let suffix: string = ` §e${scoreboard[i].value}`;
      if (scoreboard[i].player == "You") {
        prefix = `${i + 1}. §d${scoreboard[i].player}`;
      } else {
        prefix = `${i + 1}. ${this.colorToChatCode[scoreboard[i].color]}${scoreboard[i].player}`;
      }

      if (prefix.length > 16) {
        const newPrefix = prefix.substring(0, 16);
        const rest = `${this.colorToChatCode[scoreboard[i].color]}${prefix.substring(16)}`;
        const freeSpace = 16 - rest.length - suffix.length;
        if (freeSpace < 0) {
          suffix = `${rest.substring(0, rest.length + freeSpace)}${suffix}`;
        } else {
          suffix = `${rest}${" ".repeat(freeSpace)}${suffix}`;
        }

        prefix = newPrefix;
      } else {
        prefix = prefix.padEnd(16);
        suffix = suffix.padStart(16);
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

      toClient.write("scoreboard_team", data);
    }

    // fill the rest of the scoreboard with NOTHING
    for (let i = scoreboard.length; i < 8; i++) {
      let data = {
        team: `team_${9 - i}`,
        mode: 2,
        name: `team_${9 - i}`,
        prefix: "",
        suffix: "",
        friendlyFire: 3,
        nameTagVisibility: "always",
        color: 15,
        players: undefined,
      };

      toClient.write("scoreboard_team", data);
    }
  }

  incomingPacket(packet: Packet): Packet {
    if (packet.meta.name === "respawn") {
      this.clearCheckpoints();
      this.gameStarted = false;
      return packet;
    }

    if (packet.meta.name === "chat") {
      let text = constructChatMessage(packet.data.message);

      if (text.includes("Opponents:") || text.includes("Opponent:")) {
        this.gameStarted = true;
      }

      if (text.startsWith("COMPLETED!")) {
        const ign = text.split(" ")[1];

        const checkpoints = Object.keys(this.checkpoints)
          .map(Number)
          .sort((a, b) => b - a);

        for (let p of this.checkpoints[checkpoints[0]]) {
          if (p.player != ign) {
            continue;
          }

          p.completed = true;
          break;
        }
      }

      if (text.includes("disconnected")) {
        const ign = text.trim().split(" ")[0];

        const checkpoints = Object.keys(this.checkpoints)
          .map(Number)
          .sort((a, b) => b - a);

        for (let cp of checkpoints) {
          for (let entry of this.checkpoints[cp]) {
            if (entry.player != ign) {
              continue;
            }

            entry.disconnected = true;
          }
        }

        let scoreboard = this.updateScoreboard(this.checkpoints);
        this.sendScoreboard(scoreboard, packet.toClient);
        return packet;
      }

      const color = this.getPlayerColor(packet.data.message);
      const checkpointData = this.parseCheckpointMessage(text, color);
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
      Logger.debug(JSON.stringify(packet.data));
      if (
        this.gameStarted &&
        packet.data.team &&
        /^team_[1-9]$/.test(packet.data.team) &&
        !packet.data.players
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
