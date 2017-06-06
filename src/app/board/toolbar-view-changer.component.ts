import { Component, Input } from '@angular/core';

@Component({
  selector: 'toolbar-view-changer',
  template: `<i class="fa fa-bars" aria-hidden="true"></i>`,
  styleUrls: ['./board.component.css']
})
export class ToolbarViewChangerComponent {
  @Input() board;
}
