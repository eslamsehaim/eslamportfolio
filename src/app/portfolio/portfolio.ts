import { Component } from '@angular/core';

@Component({
  selector: 'app-portfolio',
  imports: [],
  templateUrl: './portfolio.html',
  styleUrl: './portfolio.css',
})
export class Portfolio {
  openLinkedin() {
    window.open('https://www.linkedin.com/in/eslam-mohammed-alaa-717156101/', '_blank', 'noopener,noreferrer');
  }

  openProjects() {
    // $('#ProjectsModal').modal('show');
  }

  closeProjects() {
    // $('#ProjectsModal').modal('hide');
  }
}
