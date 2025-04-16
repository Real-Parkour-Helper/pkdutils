import { Proxy } from "./proxy/Proxy";
import { Logger } from "./util/Logger";
import { AutoUpdater } from "./util/AutoUpdater";
import { APP_VERSION } from "./util/version";

Logger.info(`Starting pkdutils v${APP_VERSION}`);

async function main() {
  try {
    const autoUpdater = AutoUpdater.getInstance(APP_VERSION);
    await autoUpdater.checkForUpdates();
    Logger.info("Update check completed");
  } catch (error) {
    Logger.error("Error checking for updates:", error);
  }

  const proxy = new Proxy();
}

main().catch((error) => {
  Logger.error(error);
});
