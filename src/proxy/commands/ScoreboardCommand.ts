import { ScoreboardMode, SplitScoreboard } from "../modules/SplitScoreboard";
import { Command } from "../packet/Command";
import { Packet } from "../packet/Packet";

export class ScoreboardCommand extends Command {
  private scoreboard: SplitScoreboard;

  constructor(scoreboard: SplitScoreboard) {
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
    this.scoreboard = scoreboard;
  }

  protected handle(args: string[], packet: Packet) {
    this.scoreboard.SetMode(args[0] as ScoreboardMode, packet.toClient);
  }
}
