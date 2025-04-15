import { Config } from "../config/Config";
import { Command } from "../packet/Command";
import { Packet } from "../packet/Packet";

export class ScoreboardCommand extends Command {
  private config: Config = Config.getInstance();

  constructor() {
    super(
      "ScoreboardCommand",
      "1.0.0",
      ["scoreboard"],
      [
        {
          name: "scoreboard-type",
          optional: false,
        },
      ],
    );
  }

  protected handle(args: string[], packet: Packet) {
    this.config.set("scoreboard", args[0]);
  }
}
