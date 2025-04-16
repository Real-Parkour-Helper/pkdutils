import {
  existsSync,
  createWriteStream,
  renameSync,
  chmodSync,
  unlinkSync,
} from "fs";
import * as path from "path";
import * as https from "https";
import { Logger } from "./Logger";
import { platform } from "os";
import { IncomingMessage } from "http";

export class AutoUpdater {
  private static instance: AutoUpdater;
  private currentVersion: string;
  private isDevMode: boolean;
  private githubRepo = "Real-Parkour-Helper/pkdutils";

  private constructor(currentVersion: string) {
    this.currentVersion = currentVersion;
    this.isDevMode = process.env.NODE_ENV === "development";
  }

  public static getInstance(currentVersion: string): AutoUpdater {
    if (!AutoUpdater.instance) {
      AutoUpdater.instance = new AutoUpdater(currentVersion);
    }
    return AutoUpdater.instance;
  }

  async checkForUpdates(): Promise<void> {
    if (this.isDevMode) {
      Logger.info("Auto-updater disabled in development mode");
      return;
    }

    Logger.info(
      `Auto-updater initialized with current version: ${this.currentVersion}`,
    );

    try {
      Logger.debug("Checking for updates...");
      const latestRelease = await this.getLatestRelease();

      if (!latestRelease) {
        Logger.debug("Failed to get latest release info");
        return;
      }

      const latestVersion = latestRelease.tag_name.replace(/^v/, "");

      Logger.debug(
        `Latest version: ${latestVersion}, Current version: ${this.currentVersion}`,
      );

      if (this.isNewerVersion(latestVersion, this.currentVersion)) {
        Logger.info(`New version available: ${latestVersion}`);

        const asset = this.getAssetForCurrentPlatform(latestRelease.assets);

        if (asset) {
          await this.downloadAndInstallUpdate(
            asset.browser_download_url,
            asset.name,
          );
        } else {
          Logger.warn("No suitable update package found for this platform");
        }
      } else {
        Logger.debug("Application is up to date");
      }
    } catch (error) {
      Logger.error("Error checking for updates:", error);
    }
  }

  private getAssetForCurrentPlatform(assets: any[]): any {
    const currentPlatform = platform();
    let assetName: string;

    switch (currentPlatform) {
      case "win32":
        assetName = "pkdutils-windows.exe";
        break;
      case "darwin":
        assetName = "pkdutils-macos";
        break;
      case "linux":
        assetName = "pkdutils-linux";
        break;
      default:
        return null;
    }

    return assets.find((asset) => asset.name === assetName);
  }

  private async getLatestRelease(): Promise<any> {
    return new Promise((resolve, reject) => {
      const options = {
        hostname: "api.github.com",
        path: `/repos/${this.githubRepo}/releases/latest`,
        headers: {
          "User-Agent": "pkdutils-updater",
        },
      };

      https
        .get(options, (res) => {
          let data = "";

          res.on("data", (chunk) => {
            data += chunk;
          });

          res.on("end", () => {
            if (res.statusCode === 200) {
              try {
                resolve(JSON.parse(data));
              } catch (e) {
                reject(new Error("Invalid JSON response"));
              }
            } else {
              reject(new Error(`HTTP error: ${res.statusCode}`));
            }
          });
        })
        .on("error", reject);
    });
  }

  private isNewerVersion(latest: string, current: string): boolean {
    const latestParts = latest.split(".").map(Number);
    const currentParts = current.split(".").map(Number);

    for (
      let i = 0;
      i < Math.max(latestParts.length, currentParts.length);
      i++
    ) {
      const latestPart = latestParts[i] || 0;
      const currentPart = currentParts[i] || 0;

      if (latestPart > currentPart) {
        return true;
      }
      if (latestPart < currentPart) {
        return false;
      }
    }

    return false;
  }

  private async downloadAndInstallUpdate(
    url: string,
    filename: string,
  ): Promise<void> {
    Logger.info(`Downloading update from ${url}`);

    const tempPath = path.join(
      path.dirname(process.execPath),
      `${filename}.download`,
    );
    const targetPath = process.execPath;

    return new Promise<void>((resolve, reject) => {
      const makeRequest = (currentUrl: string) => {
        https
          .get(currentUrl, (response: IncomingMessage) => {
            if (
              response.statusCode &&
              [301, 302, 307, 308].includes(response.statusCode)
            ) {
              const redirectUrl = response.headers.location;
              if (!redirectUrl) {
                reject(
                  new Error(
                    `Redirect without location header: ${response.statusCode}`,
                  ),
                );
                return;
              }

              makeRequest(redirectUrl);
              return;
            }

            if (response.statusCode === 200) {
              const file = createWriteStream(tempPath);

              response.pipe(file);

              file.on("finish", () => {
                file.close();

                try {
                  Logger.info("Update downloaded successfully");

                  const backupPath = `${targetPath}.old`;
                  if (existsSync(backupPath)) {
                    unlinkSync(backupPath);
                  }

                  if (existsSync(targetPath)) {
                    renameSync(targetPath, backupPath);
                  }

                  renameSync(tempPath, targetPath);

                  if (process.platform !== "win32") {
                    chmodSync(targetPath, 0o755);
                  }

                  Logger.info(
                    "Update installed successfully. Restarting application...",
                  );

                  Logger.info(
                    "Update installed successfully! Restart PKDUtils now",
                  );
                  resolve();
                } catch (error: any) {
                  Logger.error("Failed to install update:", error);
                  reject(error);
                }
              });

              file.on("error", (error: NodeJS.ErrnoException) => {
                unlinkSync(tempPath);
                reject(error);
              });
            } else {
              reject(
                new Error(`Failed to download update: ${response.statusCode}`),
              );
            }
          })
          .on("error", (error: NodeJS.ErrnoException) => {
            Logger.error(`Download request error: ${error.message}`);
            if (existsSync(tempPath)) {
              unlinkSync(tempPath);
            }
            reject(error);
          });
      };

      makeRequest(url);
    });
  }
}
