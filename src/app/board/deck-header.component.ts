import { Component, Input } from '@angular/core';

@Component({
  selector: 'deck-header',
  template: `
  <div class="deck-header">
    <span class="deck-title">{{deck.title}}</span>
    <span class="deck-subtitle" *ngIf="deck.subtitle">{{deck.subtitle}}</span>
  </div>`,
  styleUrls: ['./board.component.css']
})
export class DeckHeaderComponent {
  @Input() deck;
}
