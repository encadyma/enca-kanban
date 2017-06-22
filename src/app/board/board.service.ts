import { Injectable } from '@angular/core';
import { Http, Response } from '@angular/http';

// Using libraries for remote APIs
import { Observable } from 'rxjs/Observable';
import 'rxjs/add/operator/catch';
import 'rxjs/add/operator/map';

// Data models
import { Board, Deck, Card } from './board';

// BoardService functions as a data interface for board data.

@Injectable()
export class BoardService {

  private accessURL = 'api/boards/1';

  constructor (private http: Http) {}

  // Returns a sample board via Promise
  /*getBoard(): Promise<Board> {
    return Promise.resolve(MOCK_BOARD);
  }*/

  getObservableBoard(): Observable<Board> {
    return this.http.get(this.accessURL)
      .map(this.extractData)
      .catch(this.extractError);
  }

  // Returns card objects from array of card ids
  getCards(deckId: number, board: Board): Promise<Card[]> {
    let selectedCards = [];
    let deckCards = [];
    for (let deck of board.decks) {
      if (deck.id == deckId) {
        deckCards = deck.cards;
      }
    }
    // Loop through each card in the board + push to array if part of deck
    for (let card of board.cards) {
      if (deckCards.indexOf(card.id) != -1) {
        selectedCards.push(card);
      }
    }
    return Promise.resolve(selectedCards);
  }

  private extractData (res: Response) {
    let body = res.json();
    return body.data || { };
  }

  private extractError (error: Response | any) {
    let errMsg: string;
    if (error instanceof Response) {
      const body = error.json() || '';
      const err = body.error || JSON.stringify(body);
      errMsg = `${error.status} - ${error.statusText || ''} ${err}`;
    } else {
      errMsg = error.message ? error.message : error.toString();
    }
    console.error(errMsg);
    return Observable.throw(errMsg);
  }
}
