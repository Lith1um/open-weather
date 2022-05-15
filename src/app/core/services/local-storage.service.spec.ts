import { NO_ERRORS_SCHEMA } from '@angular/core';
import { createServiceFactory, SpectatorService, SpectatorServiceOptions } from '@ngneat/spectator';
import { LocalStorageService } from './local-storage.service';

describe('LocalStorageService', () => {
  let spectator: SpectatorService<LocalStorageService>;

  const COMMON_SETUP: SpectatorServiceOptions<LocalStorageService> = {
    schemas: [NO_ERRORS_SCHEMA],
    service: LocalStorageService
  }

  const createService = createServiceFactory(COMMON_SETUP);

  // Mocking the store
  let store: { [key: string]: string; } = {};
  const mockLocalStorage = {
    getItem: (key: string): string | null => {
      return key in store ? store[key] : null;
    },
    setItem: (key: string, value: string) => {
      store[key] = `${value}`;
    }
  };

  beforeEach(() => {
    spectator = createService();

    store = {};
    spyOn(localStorage, 'getItem')
      .and.callFake(mockLocalStorage.getItem);
    spyOn(localStorage, 'setItem')
      .and.callFake(mockLocalStorage.setItem);
  });

  it('should create', () => {
    expect(spectator.service).toBeTruthy();
  });

  it('should return false for dark mode when no value is set', () => {
    expect(spectator.service.getDarkMode()).toBeFalsy();
  });

  it('should correctly set the dark mode', () => {
    spectator.service.setDarkMode(true);
    
    expect(spectator.service.getDarkMode()).toBeTruthy();
  });

});
