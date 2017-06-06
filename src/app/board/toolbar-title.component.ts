import { Component, Input } from '@angular/core';

@Component({
  selector: 'toolbar-title',
  template: `
  <div class="board-title">
    <span class="board-title-workspace">{{board.workspace}}: </span>
    <span class="board-title-board">{{board.title}}</span>
    <i class="fa fa-caret-down board-title-dropdown"></i>
  </div>
  `,
  styleUrls: ['board.component.css']
})
export class ToolbarTitleComponent {
  @Input() board;
}
