export enum SettingFormType {
  BUTTON,
  PICKER,
  DESCRIPTION
}

export class FormOptionProperties {
  cssClasses?: string[];
}

export class FormOption {
  id: number;
  title: string;
  description?: string;
  options?: FormOptionProperties;
}

export class SettingForm {
  title: string;
  short_desc: string;
  type: SettingFormType;
  description?: string;
  options: FormOption[];
}

export class SettingOption {
  id: number;
  title: string;
  selected: boolean;
  forms: SettingForm[];
}

export class Settings {
  title: string;
  options: SettingOption[];
  includeLogoutOption?: boolean;
}

export class SettingsArray {
  workspace: Settings;
  user: Settings;
}
