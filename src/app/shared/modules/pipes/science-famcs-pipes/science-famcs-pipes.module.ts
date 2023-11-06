import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { IsUndefinedUserDataPipe } from './is-undefined-user-data.pipe';



@NgModule({
  declarations: [IsUndefinedUserDataPipe],
  imports: [
    CommonModule
  ],
  exports: [IsUndefinedUserDataPipe],
})
export class ScienceFamcsPipesModule { }
