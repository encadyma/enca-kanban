import { Component } from '@angular/core';

@Component({

})
export class BoardComponent {
  // Sample board, based on early mockups.
  test_board = {
    id: 1,
    title: "Personal Roadmap",
    workspace: "Project Revive",
    decks: [
      {
        title: "Deck #1 (Rules)",
        cards: [
          { title: "Project Kanban Rules and Announcements" },
          { title: "Did you know?" },
          { title: "Something colorful to spice up things!" },
          { title: "Not a very good example of a one-liner card, huh?" }
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
      }
    ]
  }
}
