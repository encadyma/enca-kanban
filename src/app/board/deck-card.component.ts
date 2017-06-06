import { Component, Input } from '@angular/core';

@Component({
  selector: 'deck-card',
  template: `
  <div class="deck-card">
    <ul class="deck-card-labels">
      <li class="deck-card-label red"></li>
      <li class="deck-card-label orange"></li>
      <li class="deck-card-label yellow"></li>
      <li class="deck-card-label turq"></li>
    </ul>
    <span class="deck-card-title">{{card.title}}</span>
  </div>`,
  styleUrls: ['./board.component.css']
})
export class DeckCardComponent {
  @Input() card;
}
