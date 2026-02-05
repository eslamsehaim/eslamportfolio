import { Component, signal } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-root',
  imports: [RouterOutlet, CommonModule],
  templateUrl: './app.html',
  styleUrl: './app.css'
})
export class App {
  protected readonly title = signal('eslamportfolio');

  LightModeFlag: boolean = false;
  DarkModeFlag: boolean = true;

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
}
