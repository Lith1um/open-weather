import { Component, Input, OnChanges, OnInit, SimpleChanges } from '@angular/core';
import { CurrentForecastModel, ForecastModel, HourlyForecastModel, LocationModel } from '@forecast/models';
import { ForecastService } from '@forecast/services';
import { GeoLocationService } from '@forecast/services/geo-location.service';
import { ErrorModel } from '@shared/models';
import { EMPTY, finalize, switchMap } from 'rxjs';

@Component({
  selector: 'ow-forecast',
  templateUrl: './forecast.component.html',
  styleUrls: ['./forecast.component.scss']
})
// TODO: add loading indicator
export class ForecastComponent implements OnChanges {

  @Input()
  location: string;

  locationName: string;
  
  currentForecast: CurrentForecastModel;

  currentHourForecast: HourlyForecastModel;

  loading = true;

  error: ErrorModel;

  constructor(
    private forecastService: ForecastService,
    private geoLocationService: GeoLocationService) {}

  ngOnChanges(changes: SimpleChanges): void {
    if (changes.location.currentValue) {
      this.getForecast();
    }
  }

  getForecast(): void {
    this.loading = true;

    this.geoLocationService.getLocation(this.location).pipe(
      switchMap((location: LocationModel | undefined) => {
        if (!location) {
          return EMPTY;
        }
        this.locationName = location.name;
        return this.forecastService.getForecast(location.lon, location.lat);
      }),
      finalize(() => setTimeout(() => this.loading = false, 500))
    ).subscribe({
      next: (forecast) => {
        this.currentForecast = forecast.current;
        this.currentHourForecast = forecast.hourly[0];
      },
      error: (error: ErrorModel) => {
        console.log(error);
        this.error = error;
      }
    });
  }

}