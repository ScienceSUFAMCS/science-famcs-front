import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AboutDevelopersComponent } from './components/about-developers/about-developers.component';
import { AboutDevelopersRoutingModule } from './about-developers-routing.module';
import { TuiLinkModule } from '@taiga-ui/core';



@NgModule({
  declarations: [
    AboutDevelopersComponent
  ],
  imports: [
    CommonModule,
    AboutDevelopersRoutingModule,
    TuiLinkModule
  ]
})
export class AboutDevelopersModule { }
