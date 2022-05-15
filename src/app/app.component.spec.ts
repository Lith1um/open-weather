import { NO_ERRORS_SCHEMA } from '@angular/core';
import { LocalStorageService } from '@core/services';
import { createComponentFactory, Spectator, SpectatorOptions } from '@ngneat/spectator';
import { AppComponent } from './app.component';

const mockLocalStorage = {
  getDarkMode: () => true,
  setDarkMode: (darkMode: boolean) => {}
};

describe('AppComponent', () => {
  let spectator: Spectator<AppComponent>;

  const COMMON_SETUP: SpectatorOptions<AppComponent> = {
    schemas: [NO_ERRORS_SCHEMA],
    component: AppComponent,
    providers: [
      { provide: LocalStorageService, useValue: mockLocalStorage }
    ]
  }

  const createComponent = createComponentFactory(COMMON_SETUP);

  beforeEach(() => {
    spectator = createComponent();

    spectator.detectChanges();
  });

  it('should create', () => {
    expect(spectator.component).toBeTruthy();
  });

  it('should toggle dark mode when the toggleDarkMode method is called', () => {
    spectator.component.toggleDarkMode();

    expect(spectator.component.darkMode).toBeFalsy();
  });

});
