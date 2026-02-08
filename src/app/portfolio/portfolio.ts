import { Component } from '@angular/core';

@Component({
  selector: 'app-portfolio',
  imports: [],
  templateUrl: './portfolio.html',
  styleUrl: './portfolio.css',
})
export class Portfolio {

  LightModeFlag: boolean = false;
  DarkModeFlag: boolean = true;
  
  openLinkedin() {
    window.open('https://www.linkedin.com/in/eslam-mohammed-alaa-717156101/', '_blank', 'noopener,noreferrer');
  }

  

  LightMode() {
    this.LightModeFlag = false;
    this.DarkModeFlag = true;
  }

  DarkMode() {
    this.LightModeFlag = true;
    this.DarkModeFlag = false;
  }

  openProfile() {
    // $('#PicModal').modal('show');
  }

  closeProfile() {
    // $('#PicModal').modal('hide');
  }

  openProjects() {
    // $('#ProjectsModal').modal('show');
  }

  closeProjects() {
    // $('#ProjectsModal').modal('hide');
  }
}
