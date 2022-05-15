import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';
import { ForecastService, GeoLocationService } from '@forecast/services';
import { ForecastGridComponent, ForecastComponent } from '@forecast/components';
import { SharedModule } from '@shared/shared.module';

@NgModule({
  declarations: [
    ForecastGridComponent,
    ForecastComponent
  ],
  imports: [
    HttpClientModule,
    SharedModule
  ],
  providers: [
    ForecastService,
    GeoLocationService
  ],
  exports: [
    ForecastGridComponent
  ]
})
export class ForecastModule {}
