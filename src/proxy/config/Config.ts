import * as fs from "fs";
import * as path from "path";
import { Logger } from "../../util/Logger";

export class Config {
  private static instance: Config | null = null;
  private static configPath: string = "./config.json";
  private configData: Record<string, any> = {
    autosave: true,
    scoreboard: "splits",
  };

  private constructor() {
    this.loadConfig();
  }

  public static getInstance(): Config {
    if (!Config.instance) {
      Config.instance = new Config();
    }
    return Config.instance;
  }

  private loadConfig(): void {
    Logger.debug(`Loading config from ${Config.configPath}`);

    try {
      const dir = path.dirname(Config.configPath);
      if (!fs.existsSync(dir)) {
        fs.mkdirSync(dir, { recursive: true });
      }

      if (fs.existsSync(Config.configPath)) {
        const fileContent = fs.readFileSync(Config.configPath, "utf8");
        this.configData = JSON.parse(fileContent);
      } else {
        this.saveConfig();
      }
    } catch (error) {
      Logger.error("Error loading config:", error);
      this.configData = {};
    }
  }

  private saveConfig(): void {
    try {
      fs.writeFileSync(
        Config.configPath,
        JSON.stringify(this.configData, null, 2),
        "utf8",
      );
    } catch (error) {
      Logger.error("Error saving config:", error);
    }

    Logger.debug(`Config saved to ${Config.configPath}`);
  }

  public get<T>(key: string, defaultValue?: T): T {
    const value = this.configData[key];
    return value !== undefined ? value : (defaultValue as T);
  }

  public set<T>(key: string, value: T): void {
    this.configData[key] = value;
    this.saveConfig();
  }
}
