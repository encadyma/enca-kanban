
// Card Class
export class Card {
  //id: number;
  title: string;
  labels: string[];     // TODO: update this to be able to use custom colored labels
}

// Deck Class
export class Deck {
  id: number;
  title: string;
  subtitle?: string;
  cards: Card[];
}

// Board Class
export class Board {
  id: number;
  title: string;
  workspace: string;
  decks: Deck[];
}
