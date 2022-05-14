import { DOCUMENT } from '@angular/common';
import { Component, Inject, OnInit } from '@angular/core';

import { LocalStorageService } from '@core/services';
import { ForecastService } from '@forecast/services';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {

  darkMode = false;

  constructor(
    @Inject(DOCUMENT) private document: Document,
    private localStorage: LocalStorageService) {}

  ngOnInit(): void {
    this.darkMode = this.localStorage.getDarkMode();
    if (this.darkMode) {
      this.document.body.classList.add('dark-mode');
    }
  }

  toggleDarkMode(): void {
    this.darkMode = !this.darkMode;
    this.document.body.classList.toggle('dark-mode');
    this.localStorage.setDarkMode(this.darkMode);
  }

}

