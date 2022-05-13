import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';

import { ForecastModule } from '@forecast/forecast.module';
import { CoreModule } from '@core/core.module';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    CoreModule.forRoot(),
    ForecastModule
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
