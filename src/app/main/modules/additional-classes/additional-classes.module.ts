import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { AdditionalClassesRoutingModule } from './additional-classes-routing.module';
import { AdditionalClassesComponent } from './components/additional-classes/additional-classes.component';


@NgModule({
  declarations: [
    AdditionalClassesComponent
  ],
  imports: [
    CommonModule,
    AdditionalClassesRoutingModule
  ]
})
export class AdditionalClassesModule { }
