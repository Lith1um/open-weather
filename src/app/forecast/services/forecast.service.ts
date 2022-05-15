import { HttpClient, HttpParams } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { EnvironmentService } from '@core/services';
import { ApiService } from '@shared/services';
import { ForecastModel } from '@forecast/models';

@Injectable()
export class ForecastService extends ApiService {

  constructor(
    http: HttpClient,
    private environmentService: EnvironmentService
  ) {
    super(
      http,
      environmentService.getOpenWeatherDataApiUrl(),
      environmentService.getOpenWeatherApiKey()
    );
  }

  getForecast(
    lon: number,
    lat: number,
    units: string = 'metric',
    exclude: string = 'minutely,daily,alerts'
  ): Observable<ForecastModel> {
    let query = new HttpParams();
    query = query.append('lon', lon);
    query = query.append('lat', lat);
    query = query.append('units', units);
    query = query.append('exclude', exclude);

    return this.get('onecall', query);
  }
  
}