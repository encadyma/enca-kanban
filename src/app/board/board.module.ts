import { NgModule }       from '@angular/core';
import { CommonModule }   from '@angular/common';
import { FormsModule }    from '@angular/forms';

import { BoardComponent } from './board.component';
import { ToolbarComponent } from './toolbar.component';
import { ToolbarTitleComponent } from './toolbar-title.component';
import { ToolbarSearchComponent } from './toolbar-search.component';
import { ToolbarViewChangerComponent } from './toolbar-view-changer.component';
import { DeckComponent } from './deck.component';
import { DeckHeaderComponent } from './deck-header.component';
import { DeckCardComponent } from './deck-card.component';

@NgModule({
  imports: [
    CommonModule,
    FormsModule
  ],
  declarations: [
    BoardComponent,
    ToolbarComponent,
    ToolbarTitleComponent,
    ToolbarSearchComponent,
    ToolbarViewChangerComponent,
    DeckComponent,
    DeckHeaderComponent,
    DeckCardComponent
  ]
})
export class BoardModule {}
