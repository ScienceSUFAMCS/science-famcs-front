import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ApplicationToScienceRoutingModule } from './application-to-science-routing.module';
import { ApplicationToScienceComponent } from './components/application-to-science/application-to-science.component';


@NgModule({
  declarations: [
    ApplicationToScienceComponent
  ],
  imports: [
    CommonModule,
    ApplicationToScienceRoutingModule
  ]
})
export class ApplicationToScienceModule { }
