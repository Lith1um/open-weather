import { HttpClient, HttpParams } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { map, Observable } from 'rxjs';
import { EnvironmentService } from '@core/services';
import { ApiService } from '@shared/services';
import { LocationModel } from '@forecast/models';

@Injectable()
export class GeoLocationService extends ApiService {

  constructor(
    http: HttpClient,
    private environmentService: EnvironmentService
  ) {
    super(
      http,
      environmentService.getOpenWeatherGeoApiUrl(),
      environmentService.getOpenWeatherApiKey()
    );
  }

  getLocation(location: string): Observable<LocationModel | undefined> {
    let query = new HttpParams();
    query = query.append('q', location);
    query = query.append('limit', '1');

    return this.get('direct', query).pipe(
      map((locations: LocationModel[]) => {
        // ensure that a location was matched
        return locations.length > 0
          ? locations[0]
          : undefined;
      })
    );
  }
  
}