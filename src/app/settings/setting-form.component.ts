import { Component, Input } from '@angular/core';

@Component({
  selector: 'setting-form',
  templateUrl: 'setting-form.component.html',
  styleUrls: ['./settings.component.css']
})
export class SettingFormComponent {
  @Input() form;
}
