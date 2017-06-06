import { Component, Input } from '@angular/core';

@Component({
  selector: 'deck',
  templateUrl: './deck.component.html',
  styleUrls: ['./board.component.css']
})
export class DeckComponent {
  @Input() deck;
  @Input() selectedCard;
  onSelect(card): void {
    this.selectedCard = card;
  }
}
