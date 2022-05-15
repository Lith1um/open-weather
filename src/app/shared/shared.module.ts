import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { ErrorMessageComponent } from '@shared/components';
import { RoundPipe } from '@shared/pipes';

@NgModule({
  declarations: [
    ErrorMessageComponent,
    RoundPipe
  ],
  imports: [
    CommonModule
  ],
  exports: [
    CommonModule,
    ErrorMessageComponent,
    RoundPipe
  ],
})
export class SharedModule {}
