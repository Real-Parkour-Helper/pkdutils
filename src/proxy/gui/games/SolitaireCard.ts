export const SUITS = {
  HEARTS: { char: "♥", color: "§c", idChar: "H" },
  DIAMONDS: { char: "♦", color: "§c", idChar: "D" },
  CLUBS: { char: "♣", color: "§8", idChar: "C" }, // §0 is black, could use §8 for dark gray for visibility
  SPADES: { char: "♠", color: "§8", idChar: "S" },
} as const

export type Suit = typeof SUITS[keyof typeof SUITS];

export const RANKS = [
  { char: "A", value: 1, idChar: "A" }, { char: "2", value: 2, idChar: "2" },
  { char: "3", value: 3, idChar: "3" }, { char: "4", value: 4, idChar: "4" },
  { char: "5", value: 5, idChar: "5" }, { char: "6", value: 6, idChar: "6" },
  { char: "7", value: 7, idChar: "7" }, { char: "8", value: 8, idChar: "8" },
  { char: "9", value: 9, idChar: "9" }, { char: "10", value: 10, idChar: "T" },
  { char: "J", value: 11, idChar: "J" }, { char: "Q", value: 12, idChar: "Q" },
  { char: "K", value: 13, idChar: "K" },
] as const

export type Rank = typeof RANKS[number];

export interface SolitaireCard {
  suit: Suit;
  rank: Rank;
  faceUp: boolean;
  id: string; // e.g., "H_A" for Ace of Hearts, "S_K" for King of Spades
}

export function createDeck(): SolitaireCard[] {
  const deck: SolitaireCard[] = []
  for (const suit of Object.values(SUITS)) {
    for (const rank of RANKS) {
      deck.push({ suit, rank, faceUp: false, id: `${suit.idChar}_${rank.idChar}` })
    }
  }
  return deck
}

export function shuffleDeck(deck: SolitaireCard[]): void {
  for (let i = deck.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [deck[i], deck[j]] = [deck[j], deck[i]]
  }
}