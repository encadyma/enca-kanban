import { SettingFormType, SettingsArray } from './settings';

export const MOCK_SETTINGS: SettingsArray = {      // TODO: add proper routing vars
  workspace: {
    title: "WORKSPACE SETTINGS",
    options: [
      {id: 1, title: 'General', selected: true, forms: [
        {
          title: "NOTICE",
          short_desc: "There's not really any information here yet.",
          type: SettingFormType.DESCRIPTION,
          description: "This settings page has not been fully implemented yet. Please check back soon to see when you can change your settings.",
          options: []
        }
      ]},
      {id: 2, title: 'Boards', selected: false, forms: [
        {
          title: "NOTICE",
          short_desc: "There's not really any information here yet.",
          type: SettingFormType.DESCRIPTION,
          description: "This settings page has not been fully implemented yet. Please check back soon to see when you can change your settings.",
          options: []
        }
      ]},
      {id: 3, title: 'Appearance', selected: false, forms: [
        {
          title: "NOTICE",
          short_desc: "There's not really any information here yet.",
          type: SettingFormType.DESCRIPTION,
          description: "This settings page has not been fully implemented yet. Please check back soon to see when you can change your settings.",
          options: []
        }
      ]},
      {id: 4, title: 'Sharing', selected: false, forms: [
        {
          title: "NOTICE",
          short_desc: "There's not really any information here yet.",
          type: SettingFormType.DESCRIPTION,
          description: "This settings page has not been fully implemented yet. Please check back soon to see when you can change your settings.",
          options: []
        }
      ]},
      {id: 5, title: 'Notifications', selected: false, forms: [
        {
          title: "NOTICE",
          short_desc: "There's not really any information here yet.",
          type: SettingFormType.DESCRIPTION,
          description: "This settings page has not been fully implemented yet. Please check back soon to see when you can change your settings.",
          options: []
        }
      ]},
      {id: 6, title: 'Integrations', selected: false, forms: [
        {
          title: "NOTICE",
          short_desc: "There's not really any information here yet.",
          type: SettingFormType.DESCRIPTION,
          description: "This settings page has not been fully implemented yet. Please check back soon to see when you can change your settings.",
          options: []
        }
      ]},
      {id: 7, title: 'Activity Log', selected: false, forms: [
        {
          title: "NOTICE",
          short_desc: "There's not really any information here yet.",
          type: SettingFormType.DESCRIPTION,
          description: "This settings page has not been fully implemented yet. Please check back soon to see when you can change your settings.",
          options: []
        }
      ]},
      {id: 8, title: 'Advanced', selected: false, forms: [
        {
          title: "NOTICE",
          short_desc: "There's not really any information here yet.",
          type: SettingFormType.DESCRIPTION,
          description: "This settings page has not been fully implemented yet. Please check back soon to see when you can change your settings.",
          options: []
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
          type: SettingFormType.DESCRIPTION,
          description: "This settings page has not been fully implemented yet. Please check back soon to see when you can change your settings.",
          options: [

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
            type: SettingFormType.DESCRIPTION,
            description: "This settings page has not been fully implemented yet. Please check back soon to see when you can change your settings.",
            options: [

            ]
          }
        ]
      },
      {
        id: 11,
        title: 'Privacy and Security',
        selected: false,
        forms: [
          {
            title: "DIAGNOSTICS",
            short_desc: "Choose how you want Kanban to collect information.",
            type: SettingFormType.PICKER,
            description: "",
            options: [
              {id: 1, title: "Option #1", description: "Paragraph options are nice. However, if you choose this option, you can choose something bigger, maybe.", options: { cssClasses: [''] }},
              {id: 2, title: "Option #2", description: "Paragraph options are nice. However, if you choose this option, you can choose something bigger, maybe.", options: { cssClasses: [''] }}
            ]
          },
          {
            title: "CONNECTED SERVICES",
            short_desc: "Modify how services can interact with your account.",
            type: SettingFormType.BUTTON,
            description: "",
            options: [
              {id: 1, title: "VIEW CONNECTED SERVICES", description: "Paragraph options are nice. However, if you choose this option, you can choose something bigger, maybe.", options: { cssClasses: [''] }}
            ]
          },
          {
            title: "DELETE ACCOUNT",
            short_desc: "Erase all of your data from Project Kanban, forever.",
            type: SettingFormType.BUTTON,
            description: "This is probably the worst place to put an account deletion setting, but we'll do it because this is not really a working mockup. Just click on that big red button that says “Delete Account” to permanently delete your account from Project Kanban.",
            options: [
              {id: 1, title: "DELETE YOUR ACCOUNT", description: "", options: { cssClasses: ['red'] } /*{routeTo: ["/launch"], classes: ["red"]}*/}
            ]
          }
        ]
      }
    ],
    includeLogoutOption: true
  }
}
