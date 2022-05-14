import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';
import { ForecastService } from '@forecast/services';
import { ForecastGridComponent } from '@forecast/components';
import { SharedModule } from '@shared/shared.module';

@NgModule({
  declarations: [
    ForecastGridComponent
  ],
  imports: [
    HttpClientModule,
    SharedModule
  ],
  providers: [
    ForecastService
  ],
  exports: [
    ForecastGridComponent
  ]
})
export class ForecastModule {}
