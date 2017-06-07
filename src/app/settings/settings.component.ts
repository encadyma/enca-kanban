import { Component, Input } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-settings',
  templateUrl: './settings.component.html',
  styleUrls: ['./settings.component.css']
})
export class SettingsComponent {
  goToView = "/board";
  test_board = {
    id: 1,
    title: "Personal Roadmap",
    workspace: "Project Revive"
  }

  constructor (private router: Router) {}

  logout(): void {
    this.router.navigate(['/launch']);
  }
}
