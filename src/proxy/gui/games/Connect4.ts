import { WindowGame } from "./WindowGame"
import { PlayerPosition } from "../../modules/PlayerPosition"
import { GuiItem } from "../GuiItem"
import { Packet } from "../../packet/Packet"
import { ServerClient } from "minecraft-protocol"

type Player = "X" | "O" | null

export class Connect4 extends WindowGame {
  private readonly cols = 7
  private readonly rows = 6

  // 2D board (row 0 = bottom)
  private board: Player[][] = Array.from(
    { length: this.rows },
    () => Array(this.cols).fill(null)
  )

  constructor(private playerPosition: PlayerPosition) {
    // 54‐slot chest
    super("Connect4", ["connect4", "c4"], 54)
  }

  /**
   * Paints the 7×6 grid of empty slots in the 54‐slot chest.
   */
  protected setupInventory(): void {
    const empty = new GuiItem(35, "Empty", 1, 0)
    for (let r = 0; r < this.rows; r++) {
      for (let c = 0; c < this.cols; c++) {
        this.items[this.slotOf(r, c)] = empty
      }
    }
  }

  /**
   * Called whenever the player clicks one of our slots.
   */
  protected onClick(slot: number, packet: Packet): void {
    // map slot → column
    const col = (slot % 9) - 1
    if (col < 0 || col >= this.cols) return

    // 1) Player move
    const row = this.drop(col, "X")
    if (row < 0) return  // column full
    this.paint(row, col, "X")

    // 2) Check player win or draw
    if (this.checkWinOn(this.board, "X")) {
      this.win("You win!", packet.toClient)
      packet.toClient.write("named_sound_effect", {
        soundName: "random.levelup",
        x: this.playerPosition.pos.x,
        y: this.playerPosition.pos.y,
        z: this.playerPosition.pos.z,
        volume: 10.0,
        pitch: 47,
      })
      return
    }

    if (this.isFull()) {
      this.draw(packet.toClient)
      packet.toClient.write("named_sound_effect", {
        soundName: "random.click",
        x: this.playerPosition.pos.x,
        y: this.playerPosition.pos.y,
        z: this.playerPosition.pos.z,
        volume: 10.0,
        pitch: 37,
      })
      return
    }

    // 3) AI move
    const aiCol = this.getBestMove("O")
    const aiRow = this.drop(aiCol, "O")
    if (aiRow >= 0) {
      this.paint(aiRow, aiCol, "O")
      if (this.checkWinOn(this.board, "O")) {
        this.win("Opponent wins!", packet.toClient)
        packet.toClient.write("named_sound_effect", {
          soundName: "mob.endermen.portal",
          x: this.playerPosition.pos.x,
          y: this.playerPosition.pos.y,
          z: this.playerPosition.pos.z,
          volume: 10.0,
          pitch: 1,
        })
        return
      }
    }
  }

  /**
   * Called if the player closes the window mid‐game.
   */
  protected onClose(): void {
    this.resetBoard()
  }

  // ————— Helpers —————

  /** Return inventory slot index for (row,col). */
  private slotOf(r: number, c: number): number {
    const invRow = this.rows - 1 - r
    const invCol = c + 1
    return invRow * 9 + invCol
  }

  /** Drop a disc in the given column on the real board; return the row, or -1 if full. */
  private drop(col: number, p: Player): number {
    for (let r = 0; r < this.rows; r++) {
      if (!this.board[r][col]) {
        this.board[r][col] = p
        return r
      }
    }
    return -1
  }

  /** Paint a disc into the GUI at (row,col). */
  private paint(r: number, c: number, p: Player) {
    const color = p === "X" ? 4 : 14
    this.items[this.slotOf(r, c)] =
      new GuiItem(35, p === "X" ? "You" : "Opponent", 1, color)
  }

  /** Check if a board state has four‐in‐a‐row for player p. */
  private checkWinOn(bd: Player[][], p: Player): boolean {
    for (let r = 0; r < this.rows; r++) {
      for (let c = 0; c < this.cols; c++) {
        if (bd[r][c] !== p) continue
        // horizontal
        if (c + 3 < this.cols &&
          bd[r][c+1]===p && bd[r][c+2]===p && bd[r][c+3]===p) return true
        // vertical
        if (r + 3 < this.rows &&
          bd[r+1][c]===p && bd[r+2][c]===p && bd[r+3][c]===p) return true
        // diag ↗
        if (r + 3 < this.rows && c + 3 < this.cols &&
          bd[r+1][c+1]===p && bd[r+2][c+2]===p && bd[r+3][c+3]===p) return true
        // diag ↖
        if (r + 3 < this.rows && c - 3 >= 0 &&
          bd[r+1][c-1]===p && bd[r+2][c-2]===p && bd[r+3][c-3]===p) return true
      }
    }
    return false
  }

  /** Is the real board completely full? */
  private isFull(): boolean {
    return this.board.every(row => row.every(cell => cell !== null))
  }

  /**
   * Return the best column for AI by simulating on copies:
   * 1) Win if possible, 2) block player, 3) center‐biased fallback.
   */
  private getBestMove(ai: Player): number {
    const opp: Player = ai === "X" ? "O" : "X"

    // 1) Win
    for (let c = 0; c < this.cols; c++) {
      const r = this.peek(c)
      if (r >= 0) {
        const trial = this.withMove(r, c, ai)
        if (this.checkWinOn(trial, ai)) return c
      }
    }

    // 2) Block
    for (let c = 0; c < this.cols; c++) {
      const r = this.peek(c)
      if (r >= 0) {
        const trial = this.withMove(r, c, opp)
        if (this.checkWinOn(trial, opp)) return c
      }
    }

    // 3) Center → sides
    const order = [3,2,4,1,5,0,6]
    return order.find(c => this.peek(c) >= 0) ?? -1
  }

  /** Return row where a disc would land in column col, or -1 if column full. */
  private peek(col: number): number {
    for (let r = 0; r < this.rows; r++) {
      if (!this.board[r][col]) return r
    }
    return -1
  }

  /** Clone the board, then place p at (r,c). */
  private withMove(r: number, c: number, p: Player): Player[][] {
    const copy = this.board.map(row => row.slice() as Player[])
    copy[r][c] = p
    return copy
  }

  /** Send a chat message + sound, then reset the board. */
  private win(msg: string, toClient: ServerClient) {
    this.sendMessage(msg, toClient)
    this.resetBoard()
  }

  private draw(toClient: ServerClient) {
    this.sendMessage("It's a draw!", toClient)
    this.resetBoard()
  }

  private sendMessage(text: string, toClient: ServerClient) {
    toClient.write("chat", {
      message: JSON.stringify({ text: `§e${text}` }),
      position: 0
    })
  }

  /** Clear in-memory board & repaint GUI. */
  private resetBoard() {
    this.board = Array.from(
      { length: this.rows },
      () => Array(this.cols).fill(null)
    )
    this.setupInventory()
  }
}
