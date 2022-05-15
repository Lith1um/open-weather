import { Component, EventEmitter, Input, Output } from '@angular/core';

@Component({
  selector: 'ow-toolbar',
  templateUrl: './toolbar.component.html',
  styleUrls: ['./toolbar.component.scss']
})
export class ToolbarComponent {

  @Input()
  darkMode = false;

  @Output()
  darkModeToggled = new EventEmitter<void>();

}