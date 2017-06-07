import { Injectable } from '@angular/core';

import { Board } from './board';
import { MOCK_BOARD } from './mock-board';

// BoardService functions as a data interface for board data.

@Injectable()
export class BoardService {
  // Returns a sample board
  getBoard(): Board {
    return MOCK_BOARD;
  }
}
