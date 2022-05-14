import { ModuleWithProviders, NgModule, Optional, SkipSelf } from '@angular/core';

import { FooterComponent, ToolbarComponent } from '@core/components';

@NgModule({
  declarations: [
    FooterComponent,
    ToolbarComponent
  ],
  exports: [
    FooterComponent,
    ToolbarComponent
  ]
})
export class CoreModule {

  constructor(@Optional() @SkipSelf() parentModule: CoreModule) {
    if (parentModule) {
      throw new Error('CoreModule is already loaded. Import it in AppModule only');
    }
  }

  static forRoot(): ModuleWithProviders<CoreModule> {
    return {
      ngModule: CoreModule
    };
  }

}
