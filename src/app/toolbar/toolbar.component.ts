import { Component, Input } from '@angular/core';

@Component({
  selector: 'board-toolbar',
  templateUrl: './toolbar.component.html',
  styleUrls: ['./toolbar.component.css']
})
export class ToolbarComponent {
  // title = 'app works!';
  @Input() board;
}
