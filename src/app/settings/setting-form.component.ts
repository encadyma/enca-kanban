import { Component, Input } from '@angular/core';

import { SettingFormType } from './settings';

@Component({
  selector: 'setting-form',
  templateUrl: 'setting-form.component.html',
  styleUrls: ['./settings.component.css']
})
export class SettingFormComponent {
  @Input() form;
  settingType = SettingFormType;
}
