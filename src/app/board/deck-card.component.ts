import { Component, Input } from '@angular/core';

@Component({
  selector: 'deck-card',
  template: `
  <div class="deck-card" [class.active]="(card.id === selectedCard) && isSelected">
    <ul class="deck-card-labels" *ngIf="card.labels">
      <li class="deck-card-label" [ngClass]="['deck-card-label', label]" *ngFor="let label of card.labels"></li>
    </ul>
    <span class="deck-card-title">{{card.title}}</span>
  </div>`,
  styleUrls: ['./board.component.css']
})
export class DeckCardComponent {
  @Input() card;
  @Input() selectedCard;
  @Input() isSelected;
}
