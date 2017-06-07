import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-settings',
  templateUrl: './settings.component.html',
  styleUrls: ['./settings.component.css']
})
export class SettingsComponent {
  goToView = "/board";
  test_board = {
    id: 1,
    title: "Personal Roadmap",
    workspace: "Project Revive"
  };

  selectedSetting = null;

  settings = {      // TODO: add proper routing vars
    workspace: {
      title: "WORKSPACE SETTINGS",
      options: [
        {id: 1, title: 'General', selected: false},
        {id: 2, title: 'Lorem Ipsum', selected: false},
        {id: 3, title: 'Collaboration', selected: false},
        {id: 4, title: 'Not Very Serious', selected: false},
        {id: 5, title: 'Worded Astronomy', selected: false},
        {id: 6, title: 'Hovered Setting', selected: false, hovered: true},
        {id: 7, title: 'Optionism', selected: false},
        {id: 8, title: 'Selected Setting', selected: false, hovered: true}
      ]
    },
    user: {
      title: "USER SETTINGS",
      options: [
        {id: 9, title: 'General', selected: false, hovered: true},
        {id: 10, title: 'Password', selected: false},
        {id: 11, title: 'Privacy and Security', selected: true}
      ],
      includeLogoutOption: true
    }
  };

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
    console.log(this.selectedSetting);
    return this.selectedSetting;
  }

  ngOnInit() {
    this.getSelectedSetting();
  }
}
