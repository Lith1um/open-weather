import { getEnvironmentMock } from '@core/mocks';
import { EnvironmentService } from '@core/services';
import { getLocationMock } from '@forecast/mocks';
import { createHttpFactory, HttpMethod, SpectatorHttp, SpectatorHttpOptions } from '@ngneat/spectator';
import { GeoLocationService } from './geo-location.service';

const mockEnv = getEnvironmentMock();

const mockEnvironmentService = {
  getOpenWeatherApiKey: () => mockEnv.openWeatherApiKey,
  getOpenWeatherGeoApiUrl: () => mockEnv.openWeatherGeoApiUrl
}

describe('GeoLocationService', () => {
  let spectator: SpectatorHttp<GeoLocationService>;

  const COMMON_SETUP: SpectatorHttpOptions<GeoLocationService> = {
    service: GeoLocationService,
    providers: [
      { provide: EnvironmentService, useValue: mockEnvironmentService }
    ]
  }

  const createHttp = createHttpFactory(COMMON_SETUP);

  beforeEach(() => spectator = createHttp());

  it('should create', () => {
    expect(spectator.service).toBeTruthy();
  });

  it('should return a location when successful', () => {
    spectator.service.getLocation('London,GB')
      .subscribe({ next: (location) => expect(location).toEqual(getLocationMock()) });

    const req = spectator.expectOne(
      `${mockEnv.openWeatherGeoApiUrl}/direct?q=London,GB&limit=1&appid=${mockEnv.openWeatherApiKey}`,
      HttpMethod.GET
    );
    req.flush([getLocationMock()]);
  });

  it('should return an error model when the request fails', () => {
    spectator.service.getLocation('London,GB')
      .subscribe({ error: (err) => expect(err.status).toEqual(401) });

    const req = spectator.expectOne(
      `${mockEnv.openWeatherGeoApiUrl}/direct?q=London,GB&limit=1&appid=${mockEnv.openWeatherApiKey}`,
      HttpMethod.GET
    );
    req.flush('', { status: 401, statusText: 'Unauthorised' });
  });

});