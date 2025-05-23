import { WindowGame } from "./WindowGame"
import { GuiItem } from "../GuiItem"
import { Packet } from "../../packet/Packet"
import { Client } from "minecraft-protocol"
import { PlayerPosition } from "../../modules/PlayerPosition"

type Player = "X" | "O" | null

export class TicTacToe extends WindowGame {

  private boardToSlots = [12, 13, 14, 21, 22, 23, 30, 31, 32]
  private board: Player[] = Array(9).fill(null)

  constructor(private playerPosition: PlayerPosition) {
    super("TicTacToe", ["tictactoe", "ttt"], 45)
  }

  protected onClick(slot: number, packet: Packet) {
    const idx = this.boardToSlots.indexOf(slot)
    if (idx === -1 || this.board[idx] !== null) return // invalid or taken

    this.board[idx] = "X"
    this.items[slot] = new GuiItem(35, "You", 1, 4)
    if (this.checkWin(this.board, "X")) {
      this.displayResult(packet.toClient, "You win!")
      packet.toClient.write("named_sound_effect", {
        soundName: "random.levelup",
        x: this.playerPosition.pos.x,
        y: this.playerPosition.pos.y,
        z: this.playerPosition.pos.z,
        volume: 10.0,
        pitch: 47,
      })
      this.reset()
      return
    }

    if (!this.board.includes(null)) {
      this.displayResult(packet.toClient, "It's a draw!")
      packet.toClient.write("named_sound_effect", {
        soundName: "random.click",
        x: this.playerPosition.pos.x,
        y: this.playerPosition.pos.y,
        z: this.playerPosition.pos.z,
        volume: 10.0,
        pitch: 37,
      })
      this.reset()
      return
    }

    const aiIdx = this.getBestMove(this.board, "O")
    if (aiIdx !== -1) {
      const aiSlot = this.boardToSlots[aiIdx]
      this.board[aiIdx] = "O"
      this.items[aiSlot] = new GuiItem(35, "Opponent", 1, 14)

      if (this.checkWin(this.board, "O")) {
        this.displayResult(packet.toClient, "Opponent wins!")
        packet.toClient.write("named_sound_effect", {
          soundName: "mob.endermen.portal",
          x: this.playerPosition.pos.x,
          y: this.playerPosition.pos.y,
          z: this.playerPosition.pos.z,
          volume: 10.0,
          pitch: 1,
        })
        this.reset()
        return
      }
    }
  }

  protected setupInventory() {
    // Setup the inventory for TicTacToe
    const yourColorItem = new GuiItem(35, "You", 1, 4)
    const opponentColorItem = new GuiItem(35, "Opponent", 1, 14)
    const nobodyColorItem = new GuiItem(35, "Empty Spot", 1, 0)

    this.items[19] = yourColorItem
    this.items[25] = opponentColorItem

    this.items[12] = nobodyColorItem
    this.items[13] = nobodyColorItem
    this.items[14] = nobodyColorItem
    this.items[21] = nobodyColorItem
    this.items[22] = nobodyColorItem
    this.items[23] = nobodyColorItem
    this.items[30] = nobodyColorItem
    this.items[31] = nobodyColorItem
    this.items[32] = nobodyColorItem
  }

  protected onClose() {
    // Handle the close event for TicTacToe
    // So do nothing
  }

  private getBestMove(board: (Player)[], ai: Player): number {
    const opponent = ai === "X" ? "O" : "X"

    // Win if possible
    for (let i = 0; i < 9; i++) {
      if (!board[i]) {
        board[i] = ai
        if (this.checkWin(board, ai)) {
          board[i] = null
          return i
        }
        board[i] = null
      }
    }

    // Block if opponent could win
    for (let i = 0; i < 9; i++) {
      if (!board[i]) {
        board[i] = opponent
        if (this.checkWin(board, opponent)) {
          board[i] = null
          return i
        }
        board[i] = null
      }
    }

    // Otherwise pick center, then corners, then edges
    const prefer = [4, 0, 2, 6, 8, 1, 3, 5, 7]
    for (const idx of prefer) {
      if (!board[idx]) {
        return idx
      }
    }

    return -1 // no move possible
  }

  private checkWin(board: (Player)[], player: Player): boolean {
    const wins = [
      [0,1,2],[3,4,5],[6,7,8], // rows
      [0,3,6],[1,4,7],[2,5,8], // cols
      [0,4,8],[2,4,6],         // diags
    ]
    return wins.some(([a,b,c]) => board[a] === player && board[b] === player && board[c] === player)
  }

  private displayResult(toClient: Client, message: string) {
    const packet = {
      message: JSON.stringify({ text: `§e${message}` }),
      position: 0
    }
    toClient.write("chat", packet)
  }

  private reset() {
    this.board.fill(null)
    this.setupInventory()
  }
}