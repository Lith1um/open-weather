import { Component, Input } from '@angular/core';

@Component({
  selector: 'ow-spinner',
  templateUrl: './spinner.component.html',
  styleUrls: ['./spinner.component.scss']
})
export class SpinnerComponent {

  @Input()
  diameter = 60;

  get styles(): { [propName: string]: number | string } {
    return {
      'width.px': this.diameter,
      'height.px': this.diameter,
      'border-width.px': Math.round(this.diameter / 5)
    }
  }

}
