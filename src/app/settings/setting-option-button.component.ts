import { Component, Input } from '@angular/core';

@Component({
  selector: 'setting-option-button',
  template: `
  <div *ngFor="let opt of options">
    <button style="margin-bottom: 20px;">{{opt.title}}</button>
    <p *ngIf="opt.description" style="max-width: 500px;">{{opt.description}}</p>
    <br *ngIf="opt.description">
  </div>`,
  styleUrls: ['./settings.component.css']
})
export class SettingOptionButtonComponent {
  @Input() options;
}
