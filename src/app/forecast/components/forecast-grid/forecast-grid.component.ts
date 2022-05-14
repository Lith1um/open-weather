import { Component, OnInit } from '@angular/core';
import { ForecastService } from '@forecast/services';

@Component({
  selector: 'ow-forecast-grid',
  templateUrl: './forecast-grid.component.html'
})
export class ForecastGridComponent implements OnInit {

  constructor(private forecastService: ForecastService) {}

  ngOnInit(): void {
    this.forecastService.getForecast('London', 'GB')
      .subscribe((forecast) => console.log(forecast));
  }

}