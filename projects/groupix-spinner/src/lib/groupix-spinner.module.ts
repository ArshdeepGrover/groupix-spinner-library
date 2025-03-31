import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { GroupixSpinnerComponent } from './groupix-spinner.component';

@NgModule({
  declarations: [GroupixSpinnerComponent],
  exports: [GroupixSpinnerComponent],
  imports: [CommonModule],
})
export class GroupixSpinnerModule {}
