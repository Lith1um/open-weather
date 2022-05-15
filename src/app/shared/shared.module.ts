import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { ErrorMessageComponent, SpinnerComponent } from '@shared/components';
import { RoundPipe } from '@shared/pipes';

@NgModule({
  declarations: [
    ErrorMessageComponent,
    SpinnerComponent,
    RoundPipe
  ],
  imports: [
    CommonModule
  ],
  exports: [
    CommonModule,
    ErrorMessageComponent,
    SpinnerComponent,
    RoundPipe
  ],
})
export class SharedModule {}
