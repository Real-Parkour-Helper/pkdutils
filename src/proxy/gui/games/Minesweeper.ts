import { GuiItem } from "../GuiItem"
import { WindowGame } from "./WindowGame"
import { Packet } from "../../packet/Packet"
import { ServerClient } from "minecraft-protocol"
import { PlayerPosition } from "../../modules/PlayerPosition"
import { Logger } from "../../../util/Logger"

interface MinesweeperCell {
  isBomb: boolean;
  isRevealed: boolean;
  isFlagged: boolean;
  adjacentBombs: number; // Number of bombs in 8 neighboring cells, -1 if this cell is a bomb
}

// --- Item Definitions for Minesweeper ---
const COVERED_CELL_ITEM = new GuiItem(13, "§7?", 1, 0); // Gravel with a "?"
const FLAGGED_CELL_ITEM = new GuiItem(35, "§c🚩 Flag", 1, 14); // Red Wool
const BOMB_REVEALED_ITEM = new GuiItem(46, "§4✸ Bomb", 1, 0); // TNT
const INCORRECTLY_FLAGGED_ITEM = new GuiItem(152, "§c✘", 1, 0); // Redstone Block (for mistake on game over)
const EMPTY_REVEALED_ITEM = new GuiItem(160, " ", 1, 0); // White Stained Glass Pane (cleaner empty look)

const NUMBER_ITEMS: { [key: number]: GuiItem } = {
  1: new GuiItem(35, "§91", 1, 3),   // Light Blue Wool
  2: new GuiItem(35, "§a2", 2, 5),   // Lime Wool
  3: new GuiItem(35, "§c3", 3, 14),  // Red Wool (same as flag, but name differs)
  4: new GuiItem(35, "§14", 4, 11),  // Blue Wool
  5: new GuiItem(35, "§65", 5, 1),   // Orange Wool
  6: new GuiItem(35, "§b6", 6, 9),   // Cyan Wool
  7: new GuiItem(35, "§07", 7, 15),  // Black Wool
  8: new GuiItem(35, "§88", 8, 7),   // Gray Wool
};
// --- End Item Definitions ---

export class Minesweeper extends WindowGame {
  private gameBoard: MinesweeperCell[] = [];
  private gameInitialized: boolean = false;
  private currentBombCount: number;
  private flagsPlaced: number = 0;

  private readonly ROWS = 6;
  private readonly COLS = 9;
  private readonly TOTAL_SLOTS = this.ROWS * this.COLS; // Should be 54

  private gameState: 'initial' | 'playing' | 'won' | 'lost' = 'initial';

  constructor(
    private playerPosition: PlayerPosition, // For sound effects
    private initialBombCount: number = 10 // Default 10 bombs
  ) {
    super("Minesweeper", ["minesweeper", "ms"], 54); // Uses full 54-slot inventory
    this.currentBombCount = this.initialBombCount;
    if (this.initialBombCount >= this.TOTAL_SLOTS) {
      Logger.warn("Minesweeper: Bomb count is too high for the board size. Reducing.");
      this.currentBombCount = this.TOTAL_SLOTS - 1; // At least one safe spot
    }
    // Note: this.items is initialized with backgroundItem by WindowGame constructor.
    // setupInventory will then populate it correctly.
  }

  /**
   * Initializes the visual inventory with covered cells and resets game state.
   */
  protected setupInventory(): void {
    this.gameBoard = [];
    this.items.length = 0; // Clear items from WindowGame's backgroundItem initialization
    for (let i = 0; i < this.TOTAL_SLOTS; i++) {
      this.gameBoard.push({
        isBomb: false,
        isRevealed: false,
        isFlagged: false,
        adjacentBombs: 0,
      });
      this.items.push(COVERED_CELL_ITEM); // Set visual to covered
    }
    this.gameInitialized = false;
    this.gameState = 'initial';
    this.flagsPlaced = 0;
    // Optionally, send a message about game start or bomb count
    // this.displayStatusMessage(packet.toClient); // Requires packet access or deferral
  }

  /**
   * First real interaction: place bombs, calculate numbers.
   */
  private initializeActualBoard(clickedSlot: number): void {
    if (this.gameInitialized) return;

    // 1. Place Bombs
    let bombsToPlace = this.currentBombCount;
    const availableSlots = Array.from({ length: this.TOTAL_SLOTS }, (_, i) => i);
    // Remove clickedSlot from potential bomb locations
    availableSlots.splice(clickedSlot, 1);

    while (bombsToPlace > 0 && availableSlots.length > 0) {
      const randomIndex = Math.floor(Math.random() * availableSlots.length);
      const bombSlot = availableSlots.splice(randomIndex, 1)[0];
      this.gameBoard[bombSlot].isBomb = true;
      this.gameBoard[bombSlot].adjacentBombs = -1; // Mark as bomb
      bombsToPlace--;
    }
    this.currentBombCount = this.currentBombCount - bombsToPlace; // Actual bombs placed

    // 2. Calculate Adjacent Bomb Counts
    for (let i = 0; i < this.TOTAL_SLOTS; i++) {
      if (!this.gameBoard[i].isBomb) {
        const neighbors = this.getNeighbors(i);
        let bombCount = 0;
        for (const neighborSlot of neighbors) {
          if (this.gameBoard[neighborSlot].isBomb) {
            bombCount++;
          }
        }
        this.gameBoard[i].adjacentBombs = bombCount;
      }
    }
    this.gameInitialized = true;
    this.gameState = 'playing';
  }

  protected onClick(slot: number, packet: Packet): void {
    if (slot < 0 || slot >= this.TOTAL_SLOTS) return; // Click outside inventory, e.g. player's own inv
    if (this.gameState === 'won' || this.gameState === 'lost') {
      // Game is over, perhaps a click could reset or close, for now, do nothing.
      // To reset, they can re-run the command.
      return;
    }

    const mouseButton = packet.data.mouseButton; // 0 for left, 1 for right

    if (!this.gameInitialized && mouseButton === 0) { // First left click
      this.initializeActualBoard(slot);
    } else if (!this.gameInitialized && mouseButton === 1) { // First right click (flagging before start)
      // Allow flagging even before board is generated
      this.toggleFlag(slot, packet.toClient);
      this.updateItemVisual(slot);
      return; // Don't proceed to reveal logic
    }


    if (!this.gameInitialized) return; // Should be initialized by a left click now

    const cell = this.gameBoard[slot];

    if (mouseButton === 0) { // Left Click
      if (cell.isFlagged || cell.isRevealed) return;

      if (cell.isBomb) {
        this.handleGameOver(packet.toClient);
      } else {
        this.revealCellRecursive(slot);
        if (this.checkWinCondition()) {
          this.handleGameWin(packet.toClient);
        }
      }
    } else if (mouseButton === 1) { // Right Click
      if (cell.isRevealed) return;
      this.toggleFlag(slot, packet.toClient);
    }

    // Update visual for the clicked/affected slot(s)
    // The base class's outgoingPacket will call resendItems, which uses this.items
    // So, all modifications should be to this.items directly.
    // The revealCellRecursive and toggleFlag methods already update this.items.
  }

  private toggleFlag(slot: number, client: ServerClient): void {
    const cell = this.gameBoard[slot];
    if (cell.isRevealed) return;

    cell.isFlagged = !cell.isFlagged;
    if (cell.isFlagged) {
      this.flagsPlaced++;
      this.items[slot] = FLAGGED_CELL_ITEM;
    } else {
      this.flagsPlaced--;
      this.items[slot] = COVERED_CELL_ITEM;
    }
    this.displayStatusMessage(client);
  }

  private updateItemVisual(slot: number): void {
    const cell = this.gameBoard[slot];
    if (cell.isFlagged && !cell.isRevealed) {
      this.items[slot] = FLAGGED_CELL_ITEM;
    } else if (cell.isRevealed) {
      if (cell.isBomb) { // Should only happen on game over sequence
        this.items[slot] = BOMB_REVEALED_ITEM;
      } else if (cell.adjacentBombs === 0) {
        this.items[slot] = EMPTY_REVEALED_ITEM;
      } else if (cell.adjacentBombs > 0) {
        this.items[slot] = NUMBER_ITEMS[cell.adjacentBombs] || COVERED_CELL_ITEM; // Fallback
      }
    } else { // Not revealed, not flagged
      this.items[slot] = COVERED_CELL_ITEM;
    }
  }


  private revealCellRecursive(slot: number): void {
    const cell = this.gameBoard[slot];
    if (slot < 0 || slot >= this.TOTAL_SLOTS || cell.isRevealed || cell.isFlagged) {
      return;
    }

    cell.isRevealed = true;
    if (cell.adjacentBombs > 0) {
      this.items[slot] = NUMBER_ITEMS[cell.adjacentBombs];
    } else { // adjacentBombs === 0
      this.items[slot] = EMPTY_REVEALED_ITEM;
      const neighbors = this.getNeighbors(slot);
      for (const neighborSlot of neighbors) {
        this.revealCellRecursive(neighborSlot); // Recursive call
      }
    }
  }

  private getNeighbors(slot: number): number[] {
    const neighbors: number[] = [];
    const r = Math.floor(slot / this.COLS);
    const c = slot % this.COLS;

    for (let dr = -1; dr <= 1; dr++) {
      for (let dc = -1; dc <= 1; dc++) {
        if (dr === 0 && dc === 0) continue;
        const nr = r + dr;
        const nc = c + dc;
        if (nr >= 0 && nr < this.ROWS && nc >= 0 && nc < this.COLS) {
          neighbors.push(nr * this.COLS + nc);
        }
      }
    }
    return neighbors;
  }

  private checkWinCondition(): boolean {
    if (!this.gameInitialized) return false;
    for (let i = 0; i < this.TOTAL_SLOTS; i++) {
      const cell = this.gameBoard[i];
      if (!cell.isBomb && !cell.isRevealed) {
        return false; // Found a non-bomb cell that isn't revealed
      }
    }
    return true; // All non-bomb cells are revealed
  }

  private handleGameOver(client: ServerClient): void {
    this.gameState = 'lost';
    this.revealAllBoard(false); // false indicates it's a loss
    this.displayMessage(client, "§cGame Over! You hit a bomb.");
    this.playSound(client, "random.explode", 1.0);
    // items are updated by revealAllBoard, WindowGame will resend them.
  }

  private handleGameWin(client: ServerClient): void {
    this.gameState = 'won';
    this.revealAllBoard(true); // true indicates it's a win (e.g., flags on bombs)
    this.displayMessage(client, "§aCongratulations! You cleared the minefield!");
    this.playSound(client, "random.levelup", 1.0);
    // items are updated by revealAllBoard, WindowGame will resend them.
  }

  private revealAllBoard(isWin: boolean): void {
    for (let i = 0; i < this.TOTAL_SLOTS; i++) {
      const cell = this.gameBoard[i];
      cell.isRevealed = true; // Mark all as revealed for display purposes
      if (cell.isBomb) {
        this.items[i] = isWin ? FLAGGED_CELL_ITEM : BOMB_REVEALED_ITEM;
      } else if (cell.isFlagged) { // Was flagged but not a bomb (only relevant on loss)
        this.items[i] = isWin ? (NUMBER_ITEMS[cell.adjacentBombs] || EMPTY_REVEALED_ITEM) : INCORRECTLY_FLAGGED_ITEM;
      } else if (cell.adjacentBombs === 0) {
        this.items[i] = EMPTY_REVEALED_ITEM;
      } else {
        this.items[i] = NUMBER_ITEMS[cell.adjacentBombs];
      }
    }
  }

  protected onClose(): void {
    // Reset the game state if the window is closed, so it's fresh for the next /minesweeper command
    this.setupInventory(); // This resets gameBoard, items, gameState, gameInitialized
    // Logger.info("Minesweeper game closed and reset.");
  }

  private displayMessage(client: ServerClient, messageText: string): void {
    client.write("chat", {
      message: JSON.stringify({ text: messageText }),
      position: 0 // 0 for chat, 1 for system message, 2 for action bar
    });
  }

  private displayStatusMessage(client: ServerClient): void {
    const bombsRemaining = this.currentBombCount - this.flagsPlaced;
    this.displayMessage(client, `§eMines: §6${bombsRemaining}`);
  }

  private playSound(client: ServerClient, soundName: string, pitch: number): void {
    client.write("named_sound_effect", {
      soundName: soundName,
      x: this.playerPosition.pos.x * 8,
      y: this.playerPosition.pos.y * 8,
      z: this.playerPosition.pos.z * 8,
      volume: 1.0 * 8, // Minecraft sound effect volume is often 0-1, but packets might scale
      pitch: Math.floor(pitch * 63), // Pitch values are typically 0-255, with 63 being 1.0
    });
  }

  // This method is part of the Command class structure, needs to be implemented
  // For WindowGame, this is called when the command is issued.
  // It's already handled by the base WindowGame's handle, which calls setupInventory.
  // So, we don't need to override it unless we have specific args for Minesweeper command.
  // protected handle(args: string[], packet: Packet): void {
  //   super.handle(args, packet); // Calls WindowGame's handle
  //   this.displayStatusMessage(packet.toClient);
  // }

  // Override outgoingPacket if needed for specific handling beyond clicks/close
  // For instance, if you wanted to update a score or timer continuously.
  // For now, the base class handles clicks and close, which is sufficient.
  // override outgoingPacket(packet: Packet): Packet {
  //   return super.outgoingPacket(packet);
  // }
}
