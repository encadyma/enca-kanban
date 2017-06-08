import { NgModule }       from '@angular/core';
import { CommonModule }   from '@angular/common';
import { FormsModule }    from '@angular/forms';

import { ToolbarComponent } from './toolbar.component';
import { ToolbarTitleComponent } from './toolbar-title.component';
import { ToolbarSearchComponent } from './toolbar-search.component';
import { ToolbarViewChangerComponent } from './toolbar-view-changer.component';

import { BoardService } from '../board/board.service';

@NgModule({
  imports: [
    CommonModule,
    FormsModule
  ],
  declarations: [
    ToolbarComponent,
    ToolbarTitleComponent,
    ToolbarSearchComponent,
    ToolbarViewChangerComponent
  ],
  exports: [
    ToolbarComponent,
    ToolbarTitleComponent,
    ToolbarSearchComponent,
    ToolbarViewChangerComponent
  ],
  providers: [BoardService]
})
export class ToolbarModule {}
