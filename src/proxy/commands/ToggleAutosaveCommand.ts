import { Config } from "../config/Config";
import { Command } from "../packet/Command";
import { Packet } from "../packet/Packet";

export class ToggleAutosaveCommand extends Command {
  private config: Config = Config.getInstance();

  constructor() {
    super("ToggleAutosaveCommand", "1.0.0", ["toggleautosave"], []);
  }

  protected handle(args: string[], packet: Packet) {
    this.config.set("autosave", !this.config.get("autosave", true));

    packet.toClient.write("chat", {
      message: JSON.stringify({
        text: `${this.config.get("autosave", true) ? "§aEnabled" : "§cDisabled"} autosaving splits.`,
      }),
      position: 0,
    });
  }
}
