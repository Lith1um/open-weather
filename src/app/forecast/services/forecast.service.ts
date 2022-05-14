import { HttpClient, HttpParams } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { EnvironmentService } from '@core/services';
import { Observable } from 'rxjs';

@Injectable()
export class ForecastService {

  private apiUrl: string;

  private apiKey: string;

  constructor(
    private http: HttpClient,
    private environmentService: EnvironmentService
  ) {
    this.apiUrl = this.environmentService.getOpenWeatherApiUrl();
    this.apiKey = this.environmentService.getOpenWeatherApiKey();
  }

  getForecast(city: string, countryCode: string): Observable<any> {
    let query = new HttpParams();
    query = query.append('q', `${city},${countryCode}`);
    query = query.append('units', 'metric');

    return this.get('weather', query);
  }

  private get(path: string, params: HttpParams): Observable<any> {
    // append the api key
    params = params.append('appid', this.apiKey);

    return this.http.get(`${this.apiUrl}/${path}`, { params });
  }
  
}