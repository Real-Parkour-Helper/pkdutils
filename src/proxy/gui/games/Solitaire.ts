import { WindowGame } from "./WindowGame"
import { SUITS, RANKS, SolitaireCard, createDeck, shuffleDeck, Suit, Rank } from "./SolitaireCard"
import { GuiItem } from "../GuiItem"
import { Packet } from "../../packet/Packet" // Assuming SolitaireCard.ts

// Assuming PlayerPosition, ServerClient, Logger are available globally or imported
interface PlayerPosition {
  pos: { x: number, y: number, z: number };
}

interface ServerClient {
  write(packetName: string, data: any): void;
}


// --- Item Definitions for Solitaire ---
const CARD_BACK_ITEM = new GuiItem(159, "§7Card Back", 1, 7) // Gray Stained Clay
const EMPTY_SLOT_ITEM = new GuiItem(160, " ", 1, 8) // Light Gray Stained Glass Pane (placeholder)
const EMPTY_FOUNDATION_SLOTS: { [key: string]: GuiItem } = {
  H: new GuiItem(160, "§c♥ Foundation", 1, 14), // Red Pane
  D: new GuiItem(160, "§c♦ Foundation", 1, 14), // Red Pane
  C: new GuiItem(160, "§8♣ Foundation", 1, 0),  // Black Pane
  S: new GuiItem(160, "§8♠ Foundation", 1, 0),  // Black Pane
}
const STOCK_RECYCLE_ITEM = new GuiItem(262, "§aRecycle Waste", 1, 0) // Arrow

// Helper to create GuiItem from SolitaireCard
function getCardGuiItem(card: SolitaireCard | null | undefined): GuiItem {
  if (!card) return EMPTY_SLOT_ITEM
  if (!card.faceUp) return CARD_BACK_ITEM
  const name = `${card.suit.color}${card.rank.char}${card.suit.char}`
  // Use paper for all cards, name differentiates
  return new GuiItem(339, name, 1, 0) // Paper
}

// Slot definitions
const STOCK_SLOT = 0
const WASTE_SLOT = 1 // Top of waste
const FOUNDATION_SLOTS_START = 3 // F0 at 3, F1 at 4, F2 at 5, F3 at 6
const TABLEAU_SLOTS_START_ROW = 1 // Tableau starts on the second row (index 1)
const SLOTS_PER_ROW = 9

// Tableau column to slot mapping (base slot for each of 7 tableau piles)
const TABLEAU_BASE_SLOTS = [
  TABLEAU_SLOTS_START_ROW * SLOTS_PER_ROW + 0, // Pile 0
  TABLEAU_SLOTS_START_ROW * SLOTS_PER_ROW + 1, // Pile 1
  TABLEAU_SLOTS_START_ROW * SLOTS_PER_ROW + 2,
  TABLEAU_SLOTS_START_ROW * SLOTS_PER_ROW + 3,
  TABLEAU_SLOTS_START_ROW * SLOTS_PER_ROW + 4,
  TABLEAU_SLOTS_START_ROW * SLOTS_PER_ROW + 5,
  TABLEAU_SLOTS_START_ROW * SLOTS_PER_ROW + 6,
]
const MAX_TABLEAU_VISIBLE_HEIGHT = 5 // How many cards to show in a tableau column

const RESET_BUTTON_SLOT = 8


interface SelectedCardInfo {
  cardStack: SolitaireCard[]; // The card(s) being moved
  sourceType: "waste" | "tableau" | "foundation";
  sourceIndex: number; // pile index for tableau/foundation
  originalSlot: number; // For highlighting
}

export class Solitaire extends WindowGame {
  private deck: SolitaireCard[] = []
  private stock: SolitaireCard[] = []
  private waste: SolitaireCard[] = []
  private foundations: SolitaireCard[][] = [[], [], [], []] // H, D, C, S (order matters)
  private foundationSuitsOrder: Suit[] = [SUITS.HEARTS, SUITS.DIAMONDS, SUITS.CLUBS, SUITS.SPADES]
  private tableau: SolitaireCard[][] = [[], [], [], [], [], [], []]

  private selectedCardInfo: SelectedCardInfo | null = null
  private recycleCount = 0
  private readonly MAX_RECYCLES = 2 // Allow recycling waste to stock twice

  constructor(private playerPosition: PlayerPosition) {
    super("Solitaire", ["solitaire", "klondike"], 63)
    // this.items initialized by WindowGame with backgroundItem
  }

  protected setupInventory(packet: Packet): void {
    this.deck = createDeck()
    shuffleDeck(this.deck)

    this.stock = [...this.deck]
    this.waste = []
    this.foundations = [[], [], [], []]
    this.tableau = [[], [], [], [], [], [], []]
    this.selectedCardInfo = null
    this.recycleCount = 0

    // Deal to Tableau
    for (let i = 0; i < 7; i++) {
      for (let j = 0; j <= i; j++) {
        const card = this.stock.pop()
        if (card) {
          if (j === i) card.faceUp = true // Top card is face up
          this.tableau[i].push(card)
        }
      }
    }
    this.updateAllGuiItems(packet)
  }

  private updateAllGuiItems(packet: Packet): void {
    // Clear all items first (or fill with default background)
    for (let i = 0; i < this.slots; i++) {
      this.items[i] = EMPTY_SLOT_ITEM // Default empty display
    }

    // Stock
    if (this.stock.length > 0) {
      this.items[STOCK_SLOT] = CARD_BACK_ITEM // Show back of stock
      // Could add a count: this.items[STOCK_SLOT].name = `§7Stock (${this.stock.length})`;
    } else if (this.waste.length > 0 && this.recycleCount < this.MAX_RECYCLES) {
      this.items[STOCK_SLOT] = STOCK_RECYCLE_ITEM
    } else {
      this.items[STOCK_SLOT] = EMPTY_SLOT_ITEM // Empty stock, no more recycles
    }


    // Waste
    if (this.waste.length > 0) {
      const topWasteCard = this.waste[this.waste.length - 1]
      this.items[WASTE_SLOT] = getCardGuiItem(topWasteCard)
    } else {
      this.items[WASTE_SLOT] = EMPTY_SLOT_ITEM
    }

    // Foundations
    for (let i = 0; i < 4; i++) {
      const foundationPile = this.foundations[i]
      const slot = FOUNDATION_SLOTS_START + i
      if (foundationPile.length > 0) {
        this.items[slot] = getCardGuiItem(foundationPile[foundationPile.length - 1])
      } else {
        this.items[slot] = EMPTY_FOUNDATION_SLOTS[this.foundationSuitsOrder[i].idChar]
      }
    }

    // Reset Button
    this.items[RESET_BUTTON_SLOT] = new GuiItem(133, "§cReset Game", 1, 0) // Emerald block


    // Tableau
    for (let pileIndex = 0; pileIndex < 7; pileIndex++) {
      const tableauPile = this.tableau[pileIndex]
      const pileLength = tableauPile.length
      // Calculate the starting index in the actual pile to display the top visible cards
      const displayStartIndexInPile = Math.max(0, pileLength - MAX_TABLEAU_VISIBLE_HEIGHT)

      for (let visualRow = 0; visualRow < MAX_TABLEAU_VISIBLE_HEIGHT; visualRow++) {
        const actualCardIndexInPile = displayStartIndexInPile + visualRow
        const slot = TABLEAU_BASE_SLOTS[pileIndex] + (visualRow * SLOTS_PER_ROW)

        if (slot < this.slots) { // Ensure slot is within GUI bounds
          if (actualCardIndexInPile < pileLength) { // If there's an actual card to display for this visual slot
            const card = tableauPile[actualCardIndexInPile]
            this.items[slot] = getCardGuiItem(card)
          } else { // This visual slot is empty because the pile is shorter
            this.items[slot] = EMPTY_SLOT_ITEM
          }
        }
      }
    }

    // Highlight selected card(s)
    if (this.selectedCardInfo) {
      const itemToHighlight = this.items[this.selectedCardInfo.originalSlot]
      if (itemToHighlight && itemToHighlight !== EMPTY_SLOT_ITEM) {
        // Create a new item to avoid modifying shared instances like CARD_BACK_ITEM
        this.items[this.selectedCardInfo.originalSlot] = new GuiItem(
          itemToHighlight.id,
          `§e> ${itemToHighlight.name} §e<`, // Add highlight markers
          itemToHighlight.count,
          itemToHighlight.damage
        )
      }
    }

    // Check for win condition
    if (this.checkWin()) {
      this.displayMessage(packet.toClient, "§aCongratulations! You've won Solitaire!")
      // Optionally, fill the board with something celebratory or lock it
      for (let i = 0; i < this.slots; i++) {
        this.items[i] = new GuiItem(57, "§bWINNER!", 1, 0) // Diamond Block
      }
    }
  }

  protected onClick(slot: number, packet: Packet): void {
    if (this.checkWin()) return // Game already won

    const client = packet.toClient

    if (slot === RESET_BUTTON_SLOT) {
      this.setupInventory(packet) // Resets and redraws
      this.displayMessage(client, "§eGame Reset!")
      return
    }

    // Click on Stock
    if (slot === STOCK_SLOT) {
      this.deselectCard()
      if (this.stock.length > 0) {
        const card = this.stock.pop()
        if (card) {
          card.faceUp = true
          this.waste.push(card)
        }
      } else if (this.waste.length > 0 && this.recycleCount < this.MAX_RECYCLES) {
        this.stock = [...this.waste.reverse()] // Take all waste cards
        this.waste = []
        this.stock.forEach(c => c.faceUp = false) // Turn them face down again in stock
        this.recycleCount++
      }
      this.playSound(client, "random.click", 0.7)
    }
    // Handle first click (selection) or second click (move)
    else if (this.selectedCardInfo) { // Second click: Try to move
      this.tryMoveSelectedTo(slot, client)
      this.deselectCard() // Always deselect after attempting a move
    } else { // First click: Try to select
      this.trySelectCardFrom(slot, client)
    }

    this.updateAllGuiItems(packet) // Redraw board based on new state
  }

  private deselectCard(): void {
    this.selectedCardInfo = null
  }

  private trySelectCardFrom(slot: number, client: ServerClient): void {
    // Try select from Waste
    if (slot === WASTE_SLOT && this.waste.length > 0) {
      const cardToSelect = this.waste[this.waste.length - 1]
      this.selectedCardInfo = {
        cardStack: [cardToSelect],
        sourceType: "waste",
        sourceIndex: -1, // Not applicable for waste pile itself
        originalSlot: slot
      }
      this.playSound(client, "gui.button.press", 1.0)
      return
    }

    // Try select from Foundation
    for (let i = 0; i < 4; i++) {
      if (slot === FOUNDATION_SLOTS_START + i && this.foundations[i].length > 0) {
        const foundationPile = this.foundations[i]
        const cardToSelect = foundationPile[foundationPile.length - 1]
        this.selectedCardInfo = {
          cardStack: [cardToSelect],
          sourceType: "foundation",
          sourceIndex: i,
          originalSlot: slot
        }
        this.playSound(client, "gui.button.press", 1.0)
        return
      }
    }

    // Try select from Tableau
    for (let pileIndex = 0; pileIndex < 7; pileIndex++) {
      const tableauPile = this.tableau[pileIndex]
      const pileLength = tableauPile.length
      const displayStartIndexInPile = Math.max(0, pileLength - MAX_TABLEAU_VISIBLE_HEIGHT)

      for (let visualRow = 0; visualRow < MAX_TABLEAU_VISIBLE_HEIGHT; visualRow++) {
        const currentCardGUISlot = TABLEAU_BASE_SLOTS[pileIndex] + (visualRow * SLOTS_PER_ROW)
        if (slot === currentCardGUISlot) { // If the clicked slot matches this visual card slot
          const actualCardIndexInPile = displayStartIndexInPile + visualRow

          if (actualCardIndexInPile < pileLength) { // Ensure this visual slot corresponds to a real card
            const clickedCard = tableauPile[actualCardIndexInPile]
            if (clickedCard.faceUp) {
              const stackToSelect: SolitaireCard[] = []
              // Select this card and all face-up cards physically on top of it in the data
              for (let k = actualCardIndexInPile; k < pileLength; k++) {
                if (tableauPile[k].faceUp) {
                  stackToSelect.push(tableauPile[k])
                } else {
                  // This should not happen if selection is from a face-up card in a valid stack
                  break
                }
              }
              if (stackToSelect.length > 0) {
                this.selectedCardInfo = {
                  cardStack: stackToSelect,
                  sourceType: "tableau",
                  sourceIndex: pileIndex, // Index of the tableau pile
                  originalSlot: slot // The GUI slot that was clicked
                }
                this.playSound(client, "gui.button.press", 1.0)
                return
              }
            }
          }
          // If we clicked an empty part of a tableau column or a face-down card (that isn't the top one to flip)
          // do nothing here, selection fails.
        }
      }
    }
  }

  private tryMoveSelectedTo(targetSlot: number, client: ServerClient): void {
    if (!this.selectedCardInfo) return

    const { cardStack, sourceType, sourceIndex } = this.selectedCardInfo
    const movingCard = cardStack[0] // The top card of the stack being moved

    // Try move to Foundation
    for (let i = 0; i < 4; i++) {
      if (targetSlot === FOUNDATION_SLOTS_START + i) {
        if (cardStack.length === 1) { // Only single cards to foundation
          const targetFoundationPile = this.foundations[i]
          const foundationSuit = this.foundationSuitsOrder[i]
          if (movingCard.suit.idChar === foundationSuit.idChar) { // Must be correct suit
            if ((targetFoundationPile.length === 0 && movingCard.rank.value === 1) || // Ace on empty
              (targetFoundationPile.length > 0 &&
                movingCard.rank.value === targetFoundationPile[targetFoundationPile.length - 1].rank.value + 1)
            ) {
              this.commitMove(targetFoundationPile, client)
              return
            }
          }
        }
      }
    }

    // Try move to Tableau
    for (let targetPileIndex = 0; targetPileIndex < 7; targetPileIndex++) {
      const targetTableauPile = this.tableau[targetPileIndex]
      const pileLength = targetTableauPile.length
      let isTargetThisTableauPile = false

      if (pileLength === 0) { // Targeting an empty Tableau pile
        if (targetSlot === TABLEAU_BASE_SLOTS[targetPileIndex]) { // Must click the base slot of the empty pile
          isTargetThisTableauPile = true
        }
      } else { // Targeting a non-empty Tableau pile
        // Check if the targetSlot corresponds to the topmost card of this pile
        const displayStartIndexInPile = Math.max(0, pileLength - MAX_TABLEAU_VISIBLE_HEIGHT)
        const topActualCardIndex = pileLength - 1
        const topCardVisualRow = topActualCardIndex - displayStartIndexInPile

        // Ensure the top card is within the visible area and was clicked
        if (topCardVisualRow >= 0 && topCardVisualRow < MAX_TABLEAU_VISIBLE_HEIGHT) {
          const topCardGUISlot = TABLEAU_BASE_SLOTS[targetPileIndex] + (topCardVisualRow * SLOTS_PER_ROW)
          if (targetSlot === topCardGUISlot) {
            isTargetThisTableauPile = true
          }
        }
      }

      if (isTargetThisTableauPile) {
        // ... (the rest of the move validation logic: King to empty, or alt color/desc rank) ...
        // This part was:
        if (targetTableauPile.length === 0) {
          if (movingCard.rank.value === 13) { /* King */
            this.commitMove(targetTableauPile, client)
            return
          }
        } else {
          const topCardOfTarget = targetTableauPile[targetTableauPile.length - 1]
          if (movingCard.suit.color !== topCardOfTarget.suit.color &&
            movingCard.rank.value === topCardOfTarget.rank.value - 1) {
            this.commitMove(targetTableauPile, client)
            return
          }
        }
        // If logic passed through here without committing, it was a valid pile target but invalid card rule
      }
    }
    this.playSound(client, "mob.villager.no", 0.8) // Invalid move
  }

  private commitMove(destinationPile: SolitaireCard[], client: ServerClient): void {
    if (!this.selectedCardInfo) return
    const { cardStack, sourceType, sourceIndex } = this.selectedCardInfo

    // Remove card(s) from source
    if (sourceType === "waste") {
      this.waste.pop() // Only one card from waste
    } else if (sourceType === "foundation") {
      this.foundations[sourceIndex].pop()
    } else if (sourceType === "tableau") {
      const sourceTableauPile = this.tableau[sourceIndex]
      sourceTableauPile.splice(sourceTableauPile.length - cardStack.length, cardStack.length)
      // Flip new top card if it's face down
      if (sourceTableauPile.length > 0) {
        sourceTableauPile[sourceTableauPile.length - 1].faceUp = true
      }
    }

    // Add card(s) to destination
    destinationPile.push(...cardStack)
    this.playSound(client, "random.pop", 0.9)
  }

  private checkWin(): boolean {
    return this.foundations.reduce((sum, pile) => sum + pile.length, 0) === 52
  }

  protected onClose(): void {
    // Logger.info("Solitaire game closed.");
    // Game state will be reset by setupInventory on next open via command
  }

  private displayMessage(client: ServerClient, messageText: string): void {
    client.write("chat", {
      message: JSON.stringify({ text: messageText }),
      position: 0
    })
  }

  private playSound(client: ServerClient, soundName: string, pitch: number): void {
    client.write("named_sound_effect", {
      soundName: soundName,
      x: this.playerPosition.pos.x * 8,
      y: this.playerPosition.pos.y * 8,
      z: this.playerPosition.pos.z * 8,
      volume: 0.8 * 8,
      pitch: Math.floor(pitch * 63),
    })
  }
}