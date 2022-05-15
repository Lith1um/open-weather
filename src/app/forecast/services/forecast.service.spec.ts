import { getEnvironmentMock } from '@core/mocks';
import { EnvironmentService } from '@core/services';
import { getForecastMock } from '@forecast/mocks';
import { createHttpFactory, HttpMethod, SpectatorHttp, SpectatorHttpOptions } from '@ngneat/spectator';
import { ForecastService } from './forecast.service';

const mockEnv = getEnvironmentMock();

const mockEnvironmentService = {
  getOpenWeatherApiKey: () => mockEnv.openWeatherApiKey,
  getOpenWeatherDataApiUrl: () => mockEnv.openWeatherDataApiUrl
}

describe('ForecastService', () => {
  let spectator: SpectatorHttp<ForecastService>;

  const COMMON_SETUP: SpectatorHttpOptions<ForecastService> = {
    service: ForecastService,
    providers: [
      { provide: EnvironmentService, useValue: mockEnvironmentService }
    ]
  }

  const createHttp = createHttpFactory(COMMON_SETUP);

  beforeEach(() => spectator = createHttp());

  it('should create', () => {
    expect(spectator.service).toBeTruthy();
  });

  it('should return a forecast when successful', () => {
    spectator.service.getForecast(0, 0)
      .subscribe({ next: (forecast) => expect(forecast).toEqual(getForecastMock()) });

    const req = spectator.expectOne(
      `${mockEnv.openWeatherDataApiUrl}/onecall?lon=0&lat=0&units=metric&exclude=minutely,daily,alerts&appid=${mockEnv.openWeatherApiKey}`,
      HttpMethod.GET
    );
    req.flush(getForecastMock());
  });

  it('should return an error model when the request fails', () => {
    spectator.service.getForecast(0, 0)
      .subscribe({ error: (err) => expect(err.status).toEqual(401) });

    const req = spectator.expectOne(
      `${mockEnv.openWeatherDataApiUrl}/onecall?lon=0&lat=0&units=metric&exclude=minutely,daily,alerts&appid=${mockEnv.openWeatherApiKey}`,
      HttpMethod.GET
    );
    req.flush('', { status: 401, statusText: 'Unauthorised' });
  });

});