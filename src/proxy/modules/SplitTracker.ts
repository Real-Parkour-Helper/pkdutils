import { ServerClient } from "minecraft-protocol";
import { Logger } from "../../util/Logger";
import { RoomName } from "../data/roomData";
import { PlayerPositionData } from "./PlayerPosition";
import * as fs from "fs";
import * as path from "path";

type BoostStrat = {
  name: string;
  time: number; // Best time in milliseconds
  boost_time: number; // Time at which the boost was used
};

type RoomSplits = {
  boostless_time: number;
  boost_strats: BoostStrat[];
};

type SplitsData = {
  [roomName: string]: RoomSplits;
};

/**
 * SplitTracker class for parsing and storing player's splits
 */
export class SplitTracker {
  private roomEnterSplit: number = 0;
  private hasBoosted: boolean = false;
  private boostPosition: PlayerPositionData | null = null;
  private splitsData: SplitsData = {};
  private splitsFilePath: string;

  private checkpointRegex =
    /CHECKPOINT! You reached checkpoint (\d+) in ([\d:\.]+)!/;

  constructor(dataFolder: string = "./data") {
    if (!fs.existsSync(dataFolder)) {
      fs.mkdirSync(dataFolder, { recursive: true });
    }

    this.splitsFilePath = path.join(dataFolder, "splits.json");
    this.loadSplits();
  }

  resetTracker() {
    this.roomEnterSplit = 0;
    this.hasBoosted = false;
    this.boostPosition = null;
  }

  /**
   * Load splits data from file
   */
  private loadSplits(): void {
    try {
      if (fs.existsSync(this.splitsFilePath)) {
        const fileData = fs.readFileSync(this.splitsFilePath, "utf8");
        this.splitsData = JSON.parse(fileData);
        Logger.debug(`Loaded splits data from ${this.splitsFilePath}`);
      } else {
        this.splitsData = {}; // TODO: Create a default splits data object
        this.saveSplits();
        Logger.debug(`Created new splits file at ${this.splitsFilePath}`);
      }
    } catch (error) {
      Logger.error(`Failed to load splits data: ${error}`);
      this.splitsData = {};
    }
  }

  /**
   * Save splits data to file
   */
  private saveSplits(): void {
    try {
      fs.writeFileSync(
        this.splitsFilePath,
        JSON.stringify(this.splitsData, null, 2),
        "utf8",
      );
      Logger.debug(`Saved splits data to ${this.splitsFilePath}`);
    } catch (error) {
      Logger.error(`Failed to save splits data: ${error}`);
    }
  }

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
      const boostStratName = this.determineBoostStrat(
        roomName,
        this.boostPosition,
      );

      const isPersonalBest = this.isBoostStratPersonalBest(
        roomName,
        boostStratName,
        roomSplit,
      );
      const pbText = isPersonalBest ? " §e§lPB!" : "";

      this.updateBoostStratSplits(roomName, boostStratName, roomSplit);

      const text = `§9Finished §a${roomName} (${boostStratName}) §a with boost §9in §a${this.msToSplit(roomSplit)}s${pbText}`;
      toClient.write("chat", {
        message: `{ "text": "${text}" }`,
        position: 0,
      });
    } else {
      const isPersonalBest = this.isBoostlessPersonalBest(roomName, roomSplit);
      const pbText = isPersonalBest ? " §e§lPB!" : "";

      this.updateBestSplits(roomName, roomSplit);

      Logger.debug(`sending a message for room ${roomName}`);
      const text = `§9Finished §a${roomName} §cwithout boost §9in §a${this.msToSplit(roomSplit)}s${pbText}`;
      toClient.write("chat", {
        message: `{ "text": "${text}" }`,
        position: 0,
      });
    }

    this.roomEnterSplit = roomExitSplit;
    this.hasBoosted = false;
    this.boostPosition = null;
  }

  /**
   * Update the best splits for a room
   */
  private updateBestSplits(roomName: string, time: number): void {
    if (!this.hasBoosted && time < this.splitsData[roomName].boostless_time) {
      this.splitsData[roomName].boostless_time = time;
      this.saveSplits();
    }
  }

  /**
   * Check if the current boostless time is a personal best
   */
  private isBoostlessPersonalBest(roomName: string, time: number): boolean {
    return !this.hasBoosted && time < this.splitsData[roomName].boostless_time;
  }

  /**
   * Update boost strategy splits
   */
  private updateBoostStratSplits(
    roomName: string,
    stratName: string, // TODO: just use an index instead
    time: number,
  ): void {
    let stratIndex = this.splitsData[roomName].boost_strats.findIndex(
      (strat) => strat.name === stratName,
    );

    const strat = this.splitsData[roomName].boost_strats[stratIndex];
    if (time < strat.time) {
      strat.time = time;
      strat.boost_time = 0;
      this.saveSplits();
    }
  }

  /**
   * Check if the current boost strategy time is a personal best
   */
  private isBoostStratPersonalBest(
    roomName: string,
    stratName: string, // TODO: just use an index instead
    time: number,
  ): boolean {
    const strat = this.splitsData[roomName].boost_strats.find(
      (s) => s.name === stratName,
    );
    if (!strat) return true;

    return time < strat.time;
  }

  /**
   * Checks closest regions to determine which boost strategy to assign
   * to assign the player's boost to
   */
  private determineBoostStrat(
    room: RoomName,
    boostPos: PlayerPositionData,
  ): string {
    return "Unknown Strat";
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
