import { Component, Input } from '@angular/core';

@Component({
  selector: 'settings-bar',
  templateUrl: './settings-bar.component.html',
  styleUrls: ['./settings.component.css']
})
export class SettingsBarComponent {
  settings = {      // TODO: add proper routing vars
    workspace: {
      title: "WORKSPACE SETTINGS",
      options: [
        {title: 'General'},
        {title: 'Lorem Ipsum'},
        {title: 'Collaboration'},
        {title: 'Not Very Serious'},
        {title: 'Worded Astronomy'},
        {title: 'Hovered Setting', hovered: true},
        {title: 'Optionism'},
        {title: 'Selected Setting', default: true}
      ]
    },
    user: {
      title: "USER SETTINGS",
      options: [
        {title: 'General', hovered: true},
        {title: 'Password'},
        {title: 'Privacy and Security', default: true}
      ],
      includeLogoutOption: true
    }
  };

  getOptionClasses(option): string[] {
    var returnArray = [];
    if (option.hovered) {
      returnArray.push('hovered');
    }
    if (option.default) {
      returnArray.push('active');
    }
    return returnArray;
  }
}
