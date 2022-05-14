import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { ErrorMessageComponent } from '@shared/components';

@NgModule({
  declarations: [
    ErrorMessageComponent
  ],
  imports: [
    CommonModule
  ],
  exports: [
    CommonModule,
    ErrorMessageComponent
  ],
})
export class SharedModule {}
