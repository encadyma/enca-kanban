import { Component, Input } from '@angular/core';

@Component({
  selector: 'toolbar-search',
  template: `<input class="board-search" type="text" placeholder="Search this board..."/>`,
  styleUrls: ['./toolbar.component.css']
})
export class ToolbarSearchComponent {
  @Input() board;
}
