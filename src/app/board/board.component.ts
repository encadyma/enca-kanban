import { Component } from '@angular/core';

@Component({
  selector: 'app-board',
  templateUrl: './board.component.html',
  styleUrls: ['./board.component.css']
})
export class BoardComponent {
  // Sample board, based on early mockups.
  test_board = {
    id: 1,
    title: "Personal Roadmap",
    workspace: "Project Revive",
    decks: [
      {
        title: "Welcome to Project Kanban!",
        cards: [
          { title: "Project Kanban Rules and Announcements" },
          { title: "Did you know?" },
          { title: "Something colorful to spice up things!" },
          { title: "Not a very good example of a one-liner card, huh?" }
        ]
      },
      {
        title: "Board Rules",
        cards: [
          { title: "Rule #1: Never talk about the board club!" },
          { title: "Rule #2: Keep your hands clean at all times." },
          { title: "Rule #3: Make sure you're always living it up." },
          { title: "Rule #4: There are no more rules!" },
        ]
      },
      {
        title: "List of Todos",
        subtitle: "Linked to PhraseFactory, last updated on 8:15 PM",
        cards: [
          { title: "Clean up the dishes daily" },
          { title: "Set up an appointment with Jaine by 6/17" }
        ]
      },
      {
        title: "Done",
        cards: [
          { title: "1-hour dubstep mix for College Festa" },
          { title: "50 page paper on AI (due by finals)" }
        ]
      },
    ]
  };
}
