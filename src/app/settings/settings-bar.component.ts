import { Component, Input } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'settings-bar',
  templateUrl: './settings-bar.component.html',
  styleUrls: ['./settings.component.css']
})
export class SettingsBarComponent {
  @Input() settings;
  @Input() selectedSetting;

  constructor (private router: Router) {}

  getOptionClasses(option): string[] {
    var returnArray = [];
    if (option.hovered) {
      returnArray.push('hovered');
    }
    if (option.selected) {
      returnArray.push('active');
    }
    return returnArray;
  }

  setSelectedSetting(id): void {
    for (var setting of this.settings.workspace.options) {
      if (setting.id == id) {
        setting.selected = true;
      } else {
        setting.selected = false;
      }
    }
    for (var setting of this.settings.user.options) {
      if (setting.id == id) {
        setting.selected = true;
      } else {
        setting.selected = false;
      }
    }
  }

  logout(): void {
    this.router.navigate(['/launch']);
  }
}
