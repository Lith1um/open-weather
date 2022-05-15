import { NO_ERRORS_SCHEMA } from '@angular/core';
import { createComponentFactory, Spectator, SpectatorOptions } from '@ngneat/spectator';
import { ToolbarComponent } from './toolbar.component';

describe('ToolbarComponent', () => {
  let spectator: Spectator<ToolbarComponent>;

  const COMMON_SETUP: SpectatorOptions<ToolbarComponent> = {
    schemas: [NO_ERRORS_SCHEMA],
    component: ToolbarComponent
  }

  const createComponent = createComponentFactory(COMMON_SETUP);

  beforeEach(() => {
    spectator = createComponent({
      props: {
        darkMode: true
      }
    });

    spectator.detectChanges();
  });

  it('should create', () => {
    expect(spectator.component).toBeTruthy();
  });

  it('should show a dark_mode icon if darkMode is true', () => {
    const icon = spectator.query('.toolbar__dark-mode') as HTMLElement;

    expect(icon?.textContent).toContain('dark_mode')
  });

  it('should emit when the icon is clicked', () => {
    const icon = spectator.query('.toolbar__dark-mode') as HTMLElement;
    spyOn(spectator.component.darkModeToggled, 'emit');

    icon.click();
    
    expect(spectator.component.darkModeToggled.emit).toHaveBeenCalled();
  })

});
