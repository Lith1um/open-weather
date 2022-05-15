import { Component } from '@angular/core';

@Component({
  selector: 'ow-forecast-grid',
  templateUrl: './forecast-grid.component.html',
  styleUrls: ['./forecast-grid.component.scss']
})
export class ForecastGridComponent {

  locations: string[] = [
    'London,GB',
    'Paris,FR',
    'New York,NY,US',
    'Los Angeles,CA,US',
    'Tokyo,JP'
  ];

}