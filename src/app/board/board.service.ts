import { Injectable } from '@angular/core';

import { Board, Deck, Card } from './board';
import { MOCK_BOARD } from './mock-board';

// BoardService functions as a data interface for board data.

@Injectable()
export class BoardService {
  // Returns a sample board via Promise
  getBoard(): Promise<Board> {
    return Promise.resolve(MOCK_BOARD);
  }

  selectedCards = [];
  deckCards = [];

  // Returns card objects from array of card ids
  getCards(deckId: number, board: Board): Promise<Card[]> {
    this.selectedCards = [];
    this.deckCards = [];
    for (let deck of board.decks) {
      if (deck.id == deckId) {
        this.deckCards = deck.cards;
      }
    }
    // Loop through each card in the board + push to array if part of deck
    for (let card of board.cards) {
      if (this.deckCards.indexOf(card.id) != -1) {
        this.selectedCards.push(card);
      }
    }
    return Promise.resolve(this.selectedCards);
  }
}
