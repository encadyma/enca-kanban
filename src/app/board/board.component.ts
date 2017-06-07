import { Component } from '@angular/core';

@Component({
  selector: 'app-board',
  templateUrl: './board.component.html',
  styleUrls: ['./board.component.css']
})
export class BoardComponent {
  // Sample board, based on early mockups.
  selectedCard = null;
  goToView = "/settings";
  test_board = {
    id: 1,
    title: "Personal Roadmap",
    workspace: "Project Revive",
    decks: [
      {
        title: "Welcome to Project Kanban!",
        cards: [
          { title: "Project Kanban Rules and Announcements", labels: ['red', 'orange', 'yellow', 'turq'] },
          { title: "Did you know?", labels: ['red', 'orange', 'yellow', 'turq'] },
          { title: "Something colorful to spice up things!", labels: ['red', 'orange', 'yellow', 'turq'] },
          { title: "Not a very good example of a one-liner card, huh?", labels: ['red', 'orange', 'yellow', 'turq'] }
        ]
      },
      {
        title: "Board Rules",
        cards: [
          { title: "Rule #1: Never talk about the board club!", labels: ['red', 'orange', 'yellow', 'turq'] },
          { title: "Rule #2: Keep your hands clean at all times.", labels: ['red', 'orange', 'yellow', 'turq'] },
          { title: "Rule #3: Make sure you're always living it up.", labels: ['red', 'orange', 'yellow', 'turq'] },
          { title: "Rule #4: There are no more rules!", labels: ['red', 'orange', 'yellow', 'turq'] },
        ]
      },
      {
        title: "List of Todos",
        subtitle: "Linked to PhraseFactory, last updated on 8:15 PM",
        cards: [
          { title: "Clean up the dishes daily", labels: ['red', 'orange', 'yellow', 'turq'] },
          { title: "Set up an appointment with Jaine by 6/17", labels: ['red', 'orange', 'yellow', 'turq'] }
        ]
      },
      {
        title: "Done",
        cards: [
          { title: "1-hour dubstep mix for College Festa", labels: ['red', 'orange', 'yellow', 'turq'] },
          { title: "50 page paper on AI (due by finals)", labels: ['red', 'orange', 'yellow', 'turq'] }
        ]
      },
      {
        title: "Sample Deck",
        subtitle: "Subtitle to put integration info",
        cards: [
          { title: "Card Test #1", labels: ['orange', 'turq'] },
          { title: "Card w/ no labels!"},
          { title: "Now a card with all default labels! (special, isn't it?)", labels: ['red', 'orange', 'yellow', 'green', 'turq', 'blue', 'purple', 'black'] }
        ]
      }
    ]
  };
}
