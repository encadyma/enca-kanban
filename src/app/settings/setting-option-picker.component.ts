import { Component, Input } from '@angular/core';

@Component({
  selector: 'setting-option-picker',
  template: `
  <div *ngFor="let opt of options">
    <div class="setting-form-option">
      <h3>{{opt.title}}</h3>
      <p>{{opt.description}}</p>
    </div>
  </div>`,
  styleUrls: ['./settings.component.css']
})
export class SettingOptionPickerComponent {
  @Input() options;
}
