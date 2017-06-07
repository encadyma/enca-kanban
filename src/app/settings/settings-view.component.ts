import { Component, Input } from '@angular/core';

@Component({
  selector: 'settings-view',
  templateUrl: './settings-view.component.html',
  styleUrls: ['./settings.component.css']
})
export class SettingsViewComponent {
  @Input() settings;
  @Input() selectedSetting;
}
