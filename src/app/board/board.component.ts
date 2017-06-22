import { Component, OnInit } from '@angular/core';

import { BoardService } from './board.service'

@Component({
  selector: 'app-board',
  templateUrl: './board.component.html',
  styleUrls: ['./board.component.css']
})
export class BoardComponent implements OnInit {
  // Sample board, based on early mockups.
  selectedCard = 0;         // card id number
  selectedDeck = 0;         // deck id number
  goToView = "/settings";

  constructor (private boardService: BoardService) {}

  current_board = {}

  ngOnInit(): void {
    this.getBoard();
  }

  getBoard(): void {
    /*this.boardService.getBoard().then(board => {
      this.current_board = board;
    });*/
    this.boardService.getObservableBoard()
      .subscribe(
        board => this.current_board = board
      );
  }

  updateSelectedDeck(id: number) {
    this.selectedDeck = id;
  }
}
