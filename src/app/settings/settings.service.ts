import { Injectable } from '@angular/core';

import { SettingsArray } from './settings'
import { MOCK_SETTINGS } from './mock-settings';

// SettingService functions as a data interface for settings.

@Injectable()
export class SettingsService {
  // Returns settings array via Promise
  getSettings(): Promise<SettingsArray> {
    return Promise.resolve(MOCK_SETTINGS);
  }
}
