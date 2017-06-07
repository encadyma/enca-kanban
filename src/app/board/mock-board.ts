import { Board } from './board';

export const MOCK_BOARD: Board = {
  id: 1,
  title: "Personal Roadmap",
  workspace: "Project Revive",
  decks: [
    {
      id: 1,
      title: "Welcome to Project Kanban!",
      cards: [1, 2, 3, 4]
    },
    {
      id: 2,
      title: "Board Rules",
      cards: [5, 6, 7, 8]
    },
    {
      id: 3,
      title: "List of Todos",
      subtitle: "Linked to PhraseFactory, last updated on 8:15 PM",
      cards: [9, 10]
    },
    {
      id: 4,
      title: "Done",
      cards: [11, 12]
    },
    {
      id: 5,
      title: "Sample Deck",
      subtitle: "Subtitle to put integration info",
      cards: [13, 14, 15]
    }
  ],
  cards: [
    { id: 1, title: "Project Kanban Rules and Announcements", labels: ['red', 'orange', 'yellow', 'turq'] },
    { id: 2, title: "Did you know?", labels: ['red', 'orange', 'yellow', 'turq'] },
    { id: 3, title: "Something colorful to spice up things!", labels: ['red', 'orange', 'yellow', 'turq'] },
    { id: 4, title: "Not a very good example of a one-liner card, huh?", labels: ['red', 'orange', 'yellow', 'turq'] },
    { id: 5, title: "Rule #1: Never talk about the board club!", labels: ['red', 'orange', 'yellow', 'turq'] },
    { id: 6, title: "Rule #2: Keep your hands clean at all times.", labels: ['red', 'orange', 'yellow', 'turq'] },
    { id: 7, title: "Rule #3: Make sure you're always living it up.", labels: ['red', 'orange', 'yellow', 'turq'] },
    { id: 8, title: "Rule #4: There are no more rules!", labels: ['red', 'orange', 'yellow', 'turq'] },
    { id: 9, title: "Clean up the dishes daily", labels: ['red', 'orange', 'yellow', 'turq'] },
    { id: 10, title: "Set up an appointment with Jaine by 6/17", labels: ['red', 'orange', 'yellow', 'turq'] },
    { id: 11, title: "1-hour dubstep mix for College Festa", labels: ['red', 'orange', 'yellow', 'turq'] },
    { id: 12, title: "50 page paper on AI (due by finals)", labels: ['red', 'orange', 'yellow', 'turq'] },
    { id: 13, title: "Card Test #1", labels: ['orange', 'turq'] },
    { id: 14, title: "Card w/ no labels!", labels: [] },
    { id: 15, title: "Now a card with all default labels! (special, isn't it?)", labels: ['red', 'orange', 'yellow', 'green', 'turq', 'blue', 'purple', 'black'] }
  ]
}
