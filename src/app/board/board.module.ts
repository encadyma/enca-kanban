import { NgModule }       from '@angular/core';
import { CommonModule }   from '@angular/common';
import { FormsModule }    from '@angular/forms';

import { ToolbarModule }    from '../toolbar/toolbar.module';

import { BoardComponent } from './board.component';
import { DeckComponent } from './deck.component';
import { DeckHeaderComponent } from './deck-header.component';
import { DeckCardComponent } from './deck-card.component';

import { BoardService } from './board.service';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    ToolbarModule
  ],
  declarations: [
    BoardComponent,
    DeckComponent,
    DeckHeaderComponent,
    DeckCardComponent
  ],
  providers: [ BoardService ]
})
export class BoardModule {}
