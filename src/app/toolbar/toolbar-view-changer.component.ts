import { Component, Input } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'toolbar-view-changer',
  template: `<a [ngClass]="['fa', getIconClass()]" aria-hidden="true" (click)="onClick()"></a>`,
  styleUrls: ['./toolbar.component.css']
})
export class ToolbarViewChangerComponent {
  @Input() board;
  @Input() goToView;

  constructor(private router: Router) {}

  onClick(): void {
    console.log(this.goToView);
    this.router.navigate([this.goToView]);
  }

  getIconClass(): string {
    if (this.goToView == "/board") {
      return "fa-chevron-left";
    } else {
      return "fa-bars";
    }
  }
}
