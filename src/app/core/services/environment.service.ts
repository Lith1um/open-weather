import { Injectable } from '@angular/core';
import { EnvironmentModel } from '@core/models';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class EnvironmentService {
  
  private environment: EnvironmentModel = environment;

  public getOpenWeatherApiKey(): string {
    return this.environment.openWeatherApiKey;
  }

  public getOpenWeatherApiUrl(): string {
    return this.environment.openWeatherApiUrl;
  }
  
}