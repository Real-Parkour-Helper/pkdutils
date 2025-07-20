import { Logger } from "../../util/Logger"
import fs from "node:fs"

export type Split = {
  room: string;
  time: number;
  boostStrat: string | null;
  boostTime: number | null;
}

export type Run = {
  seed: string;
  rooms: string[];
  splits: Split[];
  totalTime: number;
  calc: any;
  timestamp: number | null;
}

export class RunStore {
  private static instance: RunStore | null = null
  private static runPath = "runs.json"

  private constructor() {
    this.loadRuns()
  }

  public static getInstance(): RunStore {
    if (!RunStore.instance) {
      RunStore.instance = new RunStore()
    }
    return RunStore.instance
  }

  private runs: Run[] = [] // Replace 'any' with the appropriate type for runs

  private loadRuns(): void {
    try {
      if (fs.existsSync(RunStore.runPath)) {
        const fileData = fs.readFileSync(RunStore.runPath, "utf8")
        this.runs = JSON.parse(fileData)
        Logger.debug(`Loaded runs from ${RunStore.runPath}`)
      } else {
        this.runs = []
        this.saveRuns(true)
        Logger.debug(`Created new runs file at ${RunStore.runPath}`)
      }
    } catch (error) {
      Logger.error("Error loading runs:", error)
      this.runs = []
    }
  }

  private saveRuns(force = false): void {
    try {
      if (this.runs.length > 0) {
        fs.writeFileSync(RunStore.runPath, JSON.stringify(this.runs, null, 2), "utf8")
        Logger.debug(`Runs saved to ${RunStore.runPath}`)
      }
    } catch (error) {
      Logger.error("Error saving runs:", error)
    }
  }

  public addRun(run: Run): void {
    this.runs.push(run)
    this.saveRuns()
  }

  public getRuns(): Run[] {
    return this.runs
  }
}