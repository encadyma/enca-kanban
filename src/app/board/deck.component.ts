import { Component, Input, OnInit } from '@angular/core';

import { BoardService } from './board.service'

@Component({
  selector: 'deck',
  templateUrl: './deck.component.html',
  styleUrls: ['./board.component.css']
})
export class DeckComponent implements OnInit {
  @Input() board;
  @Input() deck;
  @Input() selectedCard;
  @Input() selectedDeck;
  cards = [];

  constructor (private boardService: BoardService) {}

  ngOnInit(): void {
    this.getCards();
  }

  onSelect(card): void {
    this.selectedCard = card.id;
  }

  getCards() {
    this.boardService.getCards(this.deck.id, this.board).then((cards) => {
      this.cards = cards;
    });
  }

}
