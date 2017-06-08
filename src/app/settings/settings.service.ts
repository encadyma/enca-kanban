import { Injectable } from '@angular/core';

import { SettingsArray } from './settings'
import { MOCK_SETTINGS } from './mock-settings';

@Injectable()
export class SettingsService {

  getSettings(): Promise<SettingsArray> {
    return Promise.resolve(MOCK_SETTINGS);
  }

}
