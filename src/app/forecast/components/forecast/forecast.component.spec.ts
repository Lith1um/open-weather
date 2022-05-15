import { NO_ERRORS_SCHEMA } from '@angular/core';
import { getForecastMock, getLocationMock } from '@forecast/mocks';
import { ForecastService, GeoLocationService } from '@forecast/services';
import { createComponentFactory, Spectator, SpectatorOptions } from '@ngneat/spectator';
import { getErrorMock } from '@shared/mocks';
import { of, throwError } from 'rxjs';
import { ForecastComponent } from './forecast.component';

describe('ForecastComponent', () => {
  let spectator: Spectator<ForecastComponent>;

  const COMMON_SETUP: SpectatorOptions<ForecastComponent> = {
    schemas: [NO_ERRORS_SCHEMA],
    component: ForecastComponent
  }

  describe('with successful requests', () => {
    const mockForecastService = {
      getForecast: () => of(getForecastMock())
    }
    
    const mockGeoLocationService = {
      getLocation: () => of(getLocationMock())
    }

    const createComponent = createComponentFactory({
      ...COMMON_SETUP,
      providers: [
        { provide: ForecastService, useValue: mockForecastService },
        { provide: GeoLocationService, useValue: mockGeoLocationService },
      ]
    });
  
    beforeEach(() => {
      spectator = createComponent({
        props: {
          location: 'London,GB'
        }
      });
  
      spectator.detectChanges();
    });
  
    it('should create', () => {
      expect(spectator.component).toBeTruthy();
    });
  
    it('should set the forecast data when the request is successful', () => {
      const forecast = getForecastMock();
      spectator.component.getForecast();
  
      expect(spectator.component.currentForecast).toEqual(forecast.current);
      expect(spectator.component.currentHourForecast).toEqual(forecast.hourly[0]);
    });
  });

  describe('with failing location requests', () => {
    const mockForecastService = {
      getForecast: () => of(getForecastMock())
    }
    
    const mockGeoLocationService = {
      getLocation: () => of(undefined)
    }

    const createComponent = createComponentFactory({
      ...COMMON_SETUP,
      providers: [
        { provide: ForecastService, useValue: mockForecastService },
        { provide: GeoLocationService, useValue: mockGeoLocationService },
      ]
    });
  
    beforeEach(() => {
      spectator = createComponent({
        props: {
          location: 'London,GB'
        }
      });
  
      spectator.detectChanges();
    });

    it('should set the error correctly when the request for location fails', () => {
      spectator.component.getForecast();

      expect(spectator.component.error).toEqual({
        status: 404,
        message: 'Location London,GB could not be found'
      });
    });

  });

  describe('with failing forecast requests', () => {
    const mockForecastService = {
      getForecast: () => throwError(() => getErrorMock())
    }
    
    const mockGeoLocationService = {
      getLocation: () => of(getLocationMock())
    }

    const createComponent = createComponentFactory({
      ...COMMON_SETUP,
      providers: [
        { provide: ForecastService, useValue: mockForecastService },
        { provide: GeoLocationService, useValue: mockGeoLocationService },
      ]
    });
  
    beforeEach(() => {
      spectator = createComponent({
        props: {
          location: 'London,GB'
        }
      });
  
      spectator.detectChanges();
    });

    it('should set the error correctly when the request for forecast fails', () => {
      spectator.component.getForecast();

      expect(spectator.component.error).toEqual(getErrorMock());
    });

  });

});
