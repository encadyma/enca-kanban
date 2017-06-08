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
      type: SettingFormType.BUTTON,
      description: "We could not retrieve settings at this moment. This may be due to a internet connection error or server maintenance. Please try again in a little while.",
      options: [
        {id: 1, title: "NULL BUTTON", description: "", options: { cssClasses: [''] }},
      ]
    }]
  };

  settings = { workspace: {options: []}, user: {options: []} } /*{      // TODO: add proper routing vars
    workspace: {
      title: "WORKSPACE SETTINGS",
      options: [
        {id: 1, title: 'General', selected: false, forms: [
          {
            title: "NOTICE",
            short_desc: "There's not really any information here yet.",
            type: "Button",
            description: "This settings page has not been fully implemented yet. Please check back soon to see when you can change your settings.",
            options: [
              {id: 1, title: "DULL BUTTON", description: "", options: { cssClasses: [''] }},
            ]
          }
        ]},
        {id: 2, title: 'Boards', selected: false, forms: [
          {
            title: "NOTICE",
            short_desc: "There's not really any information here yet.",
            type: "Button",
            description: "This settings page has not been fully implemented yet. Please check back soon to see when you can change your settings.",
            options: [
              {id: 1, title: "DULL BUTTON", description: "", options: { cssClasses: [''] }},
            ]
          }
        ]},
        {id: 3, title: 'Appearance', selected: false, forms: [
          {
            title: "NOTICE",
            short_desc: "There's not really any information here yet.",
            type: "Button",
            description: "This settings page has not been fully implemented yet. Please check back soon to see when you can change your settings.",
            options: [
              {id: 1, title: "DULL BUTTON", description: "", options: { cssClasses: [''] }},
            ]
          }
        ]},
        {id: 4, title: 'Sharing', selected: false, forms: [
          {
            title: "NOTICE",
            short_desc: "There's not really any information here yet.",
            type: "Button",
            description: "This settings page has not been fully implemented yet. Please check back soon to see when you can change your settings.",
            options: [
              {id: 1, title: "DULL BUTTON", description: "", options: { cssClasses: [''] }},
            ]
          }
        ]},
        {id: 5, title: 'Notifications', selected: false, forms: [
          {
            title: "NOTICE",
            short_desc: "There's not really any information here yet.",
            type: "Button",
            description: "This settings page has not been fully implemented yet. Please check back soon to see when you can change your settings.",
            options: [
              {id: 1, title: "DULL BUTTON", description: "", options: { cssClasses: [''] }},
            ]
          }
        ]},
        {id: 6, title: 'Integrations', selected: false, forms: [
          {
            title: "NOTICE",
            short_desc: "There's not really any information here yet.",
            type: "Button",
            description: "This settings page has not been fully implemented yet. Please check back soon to see when you can change your settings.",
            options: [
              {id: 1, title: "DULL BUTTON", description: "", options: { cssClasses: [''] }},
            ]
          }
        ]},
        {id: 7, title: 'Activity Log', selected: false, forms: [
          {
            title: "NOTICE",
            short_desc: "There's not really any information here yet.",
            type: "Button",
            description: "This settings page has not been fully implemented yet. Please check back soon to see when you can change your settings.",
            options: [
              {id: 1, title: "DULL BUTTON", description: "", options: { cssClasses: [''] }},
            ]
          }
        ]},
        {id: 8, title: 'Advanced', selected: false, forms: [
          {
            title: "NOTICE",
            short_desc: "There's not really any information here yet.",
            type: "Button",
            description: "This settings page has not been fully implemented yet. Please check back soon to see when you can change your settings.",
            options: [
              {id: 1, title: "DULL BUTTON", description: "", options: { cssClasses: [''] }},
            ]
          }
        ]}
      ]
    },
    user: {
      title: "USER SETTINGS",
      options: [
        {id: 9, title: 'General', selected: false, forms: [
          {
            title: "NOTICE",
            short_desc: "There's not really any information here yet.",
            type: "Button",
            description: "This settings page has not been fully implemented yet. Please check back soon to see when you can change your settings.",
            options: [
              {id: 1, title: "DULL BUTTON", description: "", options: { cssClasses: [''] }},
            ]
          }
        ]},
        {
          id: 10,
          title: 'Password',
          selected: false,
          forms: [
            {
              title: "NOTICE",
              short_desc: "There's not really any information here yet.",
              type: "Button",
              description: "This settings page has not been fully implemented yet. Please check back soon to see when you can change your settings.",
              options: [
                {id: 1, title: "DULL BUTTON", description: "", options: { cssClasses: [''] }},
              ]
            }
          ]
        },
        {
          id: 11,
          title: 'Privacy and Security',
          selected: true,
          forms: [
            {
              title: "DIAGNOSTICS",
              short_desc: "Choose how you want Kanban to collect information.",
              type: "Picker",
              description: "",
              options: [
                {id: 1, title: "Option #1", description: "Paragraph options are nice. However, if you choose this option, you can choose something bigger, maybe.", options: { cssClasses: [''] }},
                {id: 2, title: "Option #2", description: "Paragraph options are nice. However, if you choose this option, you can choose something bigger, maybe.", options: { cssClasses: [''] }}
              ]
            },
            {
              title: "CONNECTED SERVICES",
              short_desc: "Modify how services can interact with your account.",
              type: "Button",
              description: "",
              options: [
                {id: 1, title: "VIEW CONNECTED SERVICES", description: "Paragraph options are nice. However, if you choose this option, you can choose something bigger, maybe.", options: { cssClasses: [''] }}
              ]
            },
            {
              title: "DELETE ACCOUNT",
              short_desc: "Erase all of your data from Project Kanban, forever.",
              type: "Button",
              description: "This is probably the worst place to put an account deletion setting, but we'll do it because this is not really a working mockup. Just click on that big red button that says “Delete Account” to permanently delete your account from Project Kanban.",
              options: [
                {id: 1, title: "DELETE YOUR ACCOUNT", description: "", options: { cssClasses: ['red'] }}
              ]
            }
          ]
        }
      ],
      includeLogoutOption: true
    }
  };*/

  constructor (private settingsService: SettingsService) {}

  getSettings(): void {
    this.settingsService.getSettings().then(settings => this.settings = settings).then(() => this.getSelectedSetting());
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
