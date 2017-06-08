import { Component, Input, OnInit } from '@angular/core';

import { BoardService } from '../board/board.service';

@Component({
  selector: 'board-toolbar',
  templateUrl: './toolbar.component.html',
  styleUrls: ['./toolbar.component.css']
})
export class ToolbarComponent implements OnInit {
  @Input() goToView;

  board = {
    id: 0,
    title: "Undefined Workspace",
    workspace: "Undefined Board"
  };

  constructor (private boardService: BoardService) {}

  getBoard(): void {
    this.boardService.getBoard().then(board => this.board = board);
  }

  ngOnInit(): void {
    this.getBoard();
  }
}
