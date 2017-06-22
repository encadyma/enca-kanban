import { Component, OnInit } from '@angular/core';

import { SettingFormType, SettingOption } from './settings';
import { SettingsService } from './settings.service';

@Component({
  selector: 'app-settings',
  templateUrl: './settings.component.html',
  styleUrls: ['./settings.component.css']
})
export class SettingsComponent implements OnInit {
  goToView = "/board";
  test_board = {
    id: 1,
    title: "Personal Roadmap",
    workspace: "Project Revive"
  };

  selectedSetting: SettingOption = {
    id: 0,
    title: "Error",
    selected: true,
    forms: [{
      title: "ERROR",
      short_desc: "Could not retrieve settings",
      type: SettingFormType.DESCRIPTION,
      description: "We could not retrieve settings at this moment. This may be due to a internet connection error or server maintenance. Please try again in a little while.",
      options: []
    }]
  };

  settings = { workspace: {options: []}, user: {options: []} }

  constructor (private settingsService: SettingsService) {}

  getSettings(): void {
    this.settingsService.getObservableSettings().subscribe(settings => {
      this.settings = settings;
      this.getSelectedSetting();
    });
  }

  getSelectedSetting(): Object {
    for (var setting of this.settings.workspace.options) {
      if (setting.selected) {
        this.selectedSetting = setting;
        break;
      }
    }
    for (var setting of this.settings.user.options) {
      if (setting.selected) {
        this.selectedSetting = setting;
        break;
      }
    }
    // console.log(this.selectedSetting);
    return this.selectedSetting;
  }

  ngOnInit(): void {
    this.getSettings();
  }
}
