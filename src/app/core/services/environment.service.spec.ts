import { NO_ERRORS_SCHEMA } from '@angular/core';
import { getEnvironmentMock } from '@core/mocks';
import { createServiceFactory, SpectatorService, SpectatorServiceOptions } from '@ngneat/spectator';
import { EnvironmentService } from './environment.service';

describe('EnvironmentService', () => {
  let spectator: SpectatorService<EnvironmentService>;

  const COMMON_SETUP: SpectatorServiceOptions<EnvironmentService> = {
    schemas: [NO_ERRORS_SCHEMA],
    service: EnvironmentService
  }

  const createService = createServiceFactory(COMMON_SETUP);

  beforeEach(() => {
    spectator = createService();

    spectator.service.environment = getEnvironmentMock();
  });

  it('should create', () => {
    expect(spectator.service).toBeTruthy();
  });

  it('should return a string from the apikey method', () => {
    expect(spectator.service.getOpenWeatherApiKey()).toEqual('abcd');
  });
  
  it('should return a string from the data url method', () => {
    expect(spectator.service.getOpenWeatherDataApiUrl()).toEqual('data-url');
  });
  
  it('should return a string from the geo url method', () => {
    expect(spectator.service.getOpenWeatherGeoApiUrl()).toEqual('geo-url');
  });

});
