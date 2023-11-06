import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { IsNullOrIndefinedUserDataPipe } from './is-null-or-indefined-user-data.pipe';



@NgModule({
  declarations: [IsNullOrIndefinedUserDataPipe],
  imports: [
    CommonModule
  ],
  exports: [IsNullOrIndefinedUserDataPipe],
})
export class ScienceFamcsPipesModule { }
