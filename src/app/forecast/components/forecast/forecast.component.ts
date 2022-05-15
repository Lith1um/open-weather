import { Component, Input, OnChanges, SimpleChanges } from '@angular/core';
import { CurrentForecastModel, HourlyForecastModel, LocationModel } from '@forecast/models';
import { ForecastService } from '@forecast/services';
import { GeoLocationService } from '@forecast/services/geo-location.service';
import { ErrorModel } from '@shared/models';
import { finalize, switchMap, throwError } from 'rxjs';

@Component({
  selector: 'ow-forecast',
  templateUrl: './forecast.component.html',
  styleUrls: ['./forecast.component.scss']
})
export class ForecastComponent implements OnChanges {

  @Input()
  location: string;

  locationName: string;
  
  currentForecast: CurrentForecastModel | undefined;

  currentHourForecast: HourlyForecastModel | undefined;

  loading = true;

  error: ErrorModel | undefined;

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
          return throwError(() => ({
            status: 404,
            message: `Location ${this.location} could not be found`
          }));
        }
        this.locationName = location.name;
        return this.forecastService.getForecast(location.lon, location.lat);
      }),
      // simulate a longer request so the UI can show the spinner
      finalize(() => setTimeout(() => this.loading = false, 500))
    ).subscribe({
      next: (forecast) => {
        this.currentForecast = forecast.current;
        this.currentHourForecast = forecast.hourly[0];
        this.error = undefined;
      },
      error: (error: ErrorModel) => {
        this.error = error;
        this.currentForecast = undefined;
        this.currentHourForecast = undefined;
      }
    });
  }

}