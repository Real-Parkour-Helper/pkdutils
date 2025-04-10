import { ServerClient } from "minecraft-protocol";
import { Logger } from "../../util/Logger";
import { RoomName } from "../data/roomData";
import { PlayerPositionData } from "./PlayerPosition";

/**
 * SplitTracker class for parsing and storing player's splits
 */
export class SplitTracker {
  private roomEnterSplit: number = 0;
  private hasBoosted: boolean = false;
  private boostPosition: PlayerPositionData | null = null;

  private checkpointRegex =
    /CHECKPOINT! You reached checkpoint (\d+) in ([\d:\.]+)!/;

  /**
   * A function for BoostInterceptor to call when the player uses his Parkour Booster
   */
  recordBoost(pos: PlayerPositionData) {
    this.hasBoosted = true;
    this.boostPosition = pos;
    Logger.debug(`Player has boosted from ${JSON.stringify(pos)}`);
  }

  roomExit(
    chatMessage: string,
    roomName: RoomName | null,
    toClient: ServerClient,
  ) {
    if (!roomName) {
      Logger.error("Room name is null");
      return;
    }

    const match = chatMessage.match(this.checkpointRegex);
    if (!match) {
      Logger.warn("Invalid checkpoint message format");
      return;
    }

    Logger.debug(JSON.stringify(match));

    const splitString = match[2];
    const roomExitSplit = this.splitToMs(splitString);
    const roomSplit = roomExitSplit - this.roomEnterSplit;

    if (this.hasBoosted && this.boostPosition) {
      const boostStrat = this.determineBoostStrat(roomName, this.boostPosition);
      const text = `§9Finished §a${roomName} (${boostStrat}) §a with boost §9in §a${this.msToSplit(roomSplit)}s`;
      toClient.write("chat", {
        message: `{ "text": "${text}" }`,
        position: 0,
      });
    } else {
      Logger.debug(`sending a message for room ${roomName}`);
      const text = `§9Finished §a${roomName} §cwithout boost §9in §a${this.msToSplit(roomSplit)}s`;
      toClient.write("chat", {
        message: `{ "text": "${text}" }`,
        position: 0,
      });
    }

    this.roomEnterSplit = roomExitSplit;
    this.hasBoosted = false;
  }

  /**
   * Checks closest regions to determine which boost strategy to assign
   * to assign the player's boost to
   */
  private determineBoostStrat(
    room: RoomName,
    boostPos: PlayerPositionData,
  ): number {
    return 0;
  }

  /**
   * Converts a time string in the format "mm:ss.ms" to milliseconds
   */
  private splitToMs(timeString: string): number {
    const parts = timeString.split(":");

    if (parts.length === 2) {
      const minutes = parseInt(parts[0]);
      const secondsParts = parts[1].split(".");
      const seconds = parseInt(secondsParts[0]);
      const milliseconds = parseInt(
        secondsParts[1].padEnd(3, "0").substring(0, 3),
      );

      return minutes * 60 * 1000 + seconds * 1000 + milliseconds;
    } else {
      Logger.warn(`Unexpected time format: ${timeString}`);
      return 0;
    }
  }

  /**
   * Formats milliseconds to the "ss.ms" format
   */
  private msToSplit(milliseconds: number): string {
    milliseconds = Math.abs(milliseconds);

    const seconds = Math.floor(milliseconds / 1000);
    const ms = milliseconds % 1000;

    const formattedMs = Math.floor(ms / 10)
      .toString()
      .padStart(2, "0");

    return `${seconds}.${formattedMs}`;
  }
}
