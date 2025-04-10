import { ServerClient } from "minecraft-protocol";
import { Logger } from "../../util/Logger";
import { boostRegions, RoomName } from "../data/roomData";
import { PlayerPositionData } from "./PlayerPosition";
import * as fs from "fs";
import * as path from "path";
import { msToSplit, splitToMs } from "../util/splitUtils";
import { Vec3 } from "vec3";
import { defaultSplits, SplitsData } from "../data/defaultSplits";
import { titleCase } from "../util/generalUtils"

/**
 * SplitTracker class for parsing and storing player's splits
 */
export class SplitTracker {
  private roomEnterSplit: number = 0;
  private hasBoosted: boolean = false;
  private boostPosition: PlayerPositionData | null = null;
  private boostTime: number = 0;
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
    this.boostTime = 0;
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
        this.splitsData = defaultSplits;
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
  recordBoost(pos: PlayerPositionData, time: number) {
    this.hasBoosted = true;
    this.boostPosition = pos;
    this.boostTime = time;
    Logger.debug(`Player has boosted from ${JSON.stringify(pos)} at ${time}`);
  }

  roomExit(
    chatMessage: string,
    roomName: RoomName | null,
    roomStartPos: Vec3,
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
    const roomExitSplit = splitToMs(splitString);
    const roomSplit = roomExitSplit - this.roomEnterSplit;

    if (this.hasBoosted && this.boostPosition) {
      const boostStratName = this.determineBoostStrat(
        roomName,
        this.boostPosition,
        roomStartPos,
      );

      const diff = this.boostStratPBDiff(
        roomName,
        boostStratName,
        roomSplit,
      );

      const isFirstPB = 600000 + diff === roomSplit
      let pbText = ""
      if (diff > 0) {
        pbText = ` §c§l(+${msToSplit(diff)}s)`
      } else if (diff < 0 && !isFirstPB) {
        pbText = ` §e§lPB! §a§l(-${msToSplit(diff)}s)`
      }


      this.updateBoostStratSplits(roomName, boostStratName, roomSplit);

      const text = `§9Finished §a${titleCase(roomName)} (${boostStratName}) §6with boost §9in §a${msToSplit(roomSplit)}s${pbText}`;
      toClient.write("chat", {
        message: `{ "text": "${text}" }`,
        position: 0,
      });
    } else {
      const diff = this.isBoostlessPersonalBest(roomName, roomSplit);

      const isFirstPB = 600000 + diff === roomSplit
      let pbText = ""
      if (diff > 0) {
        pbText = ` §c§l(+${msToSplit(diff)}s)`
      } else if (diff < 0 && !isFirstPB) {
        pbText = ` §e§lPB! §a§l(-${msToSplit(diff)}s)`
      }

      this.updateBestSplits(roomName, roomSplit);

      Logger.debug(`sending a message for room ${roomName}`);
      const text = `§9Finished §a${titleCase(roomName)} §6without boost §9in §a${msToSplit(roomSplit)}s${pbText}`;
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
  private isBoostlessPersonalBest(roomName: string, time: number): number {
    return time - this.splitsData[roomName].boostless_time;
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
      strat.boost_time = this.boostTime - this.roomEnterSplit;
      this.saveSplits();
    }
  }

  /**
   * Check if the current boost strategy time is a personal best
   */
  private boostStratPBDiff(
    roomName: string,
    stratName: string, // TODO: just use an index instead
    time: number,
  ): number {
    const strat = this.splitsData[roomName].boost_strats.find(
      (s) => s.name === stratName,
    );
    if (!strat) return -1000;

    return time - strat.time;
  }

  /**
   * Checks closest regions to determine which boost strategy to assign
   * to assign the player's boost to
   */
  private determineBoostStrat(
    room: RoomName,
    boostPos: PlayerPositionData,
    roomStartPos: Vec3,
  ): string {
    Logger.debug(JSON.stringify(roomStartPos));

    const regions = boostRegions[room];
    if (!regions || regions.length === 0) {
      Logger.error(
        `Didn't find any boost regions for room ${room}. This is not supposed to happen, please report it`,
      );
      return "Unknown Strat";
    }

    Logger.debug(JSON.stringify(boostPos));
    const relX = boostPos.x - roomStartPos.x;
    const relZ = boostPos.z - roomStartPos.z;

    Logger.debug(`Player's relative position: ${relX} ${relZ}`);

    let closestRegion = null;
    let minDistance = Infinity;

    for (const region of regions) {
      if (
        relX >= region.region.min_x &&
        relX <= region.region.max_x &&
        relZ >= region.region.min_z &&
        relZ <= region.region.max_z
      ) {
        return region.name;
      }

      const closestX = Math.max(
        region.region.min_x,
        Math.min(relX, region.region.max_x),
      );
      const closestZ = Math.max(
        region.region.min_z,
        Math.min(relZ, region.region.max_z),
      );

      const distanceSquared =
        Math.pow(closestX - relX, 2) + Math.pow(closestZ - relZ, 2);

      if (distanceSquared < minDistance) {
        minDistance = distanceSquared;
        closestRegion = region;
      }
    }

    return closestRegion ? closestRegion.name : "Unknown Strat";
  }
}
