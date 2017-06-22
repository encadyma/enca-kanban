import { InMemoryDbService } from 'angular-in-memory-web-api';

import { MOCK_BOARD } from './board/mock-board';
import { MOCK_SETTINGS } from './settings/mock-settings';

export class AppDataService implements InMemoryDbService {
  createDb() {
    let settings = MOCK_SETTINGS;
    let boards = [MOCK_BOARD];

    return {boards, settings};
  }
}
