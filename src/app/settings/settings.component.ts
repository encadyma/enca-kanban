import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-settings',
  templateUrl: './settings.component.html',
  styleUrls: ['./settings.component.css']
})
export class SettingsComponent {
  test_board = {
    id: 1,
    title: "Personal Roadmap",
    workspace: "Project Revive"
  }
}
