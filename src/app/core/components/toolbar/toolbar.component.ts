import { DOCUMENT } from '@angular/common';
import { Component, Inject } from '@angular/core';

@Component({
  selector: 'ow-toolbar',
  templateUrl: './toolbar.component.html',
  styleUrls: ['./toolbar.component.scss']
})
export class ToolbarComponent {

  title = 'OpenWeather';

  darkMode = false;

  constructor(@Inject(DOCUMENT) private document: Document) {}

  toggleDarkMode(): void {
    this.darkMode = !this.darkMode;
    this.document.body.classList.toggle('dark-mode');
  }

}