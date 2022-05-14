import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';
import { ForecastService } from '@forecast/services';
import { ForecastGridComponent } from '@forecast/components';

@NgModule({
  declarations: [
    ForecastGridComponent
  ],
  imports: [
    HttpClientModule
  ],
  providers: [
    ForecastService
  ],
  exports: [
    ForecastGridComponent
  ]
})
export class ForecastModule {}
