import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'ow-error-message',
  templateUrl: './error-message.component.html',
  styleUrls: ['./error-message.component.scss']
})
export class ErrorMessageComponent {

  @Input()
  errorMessage: string;

}