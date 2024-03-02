import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AboutDevelopersComponent } from './components/about-developers/about-developers.component';
import { AboutDevelopersRoutingModule } from './about-developers-routing.module';
import { TuiButtonModule, TuiLinkModule } from '@taiga-ui/core';
import { DeveloperCardComponent } from './components/developer-card/developer-card.component';



@NgModule({
  declarations: [
    AboutDevelopersComponent,
    DeveloperCardComponent
  ],
  imports: [
    CommonModule,
    AboutDevelopersRoutingModule,
    TuiLinkModule,
    TuiButtonModule,
  ]
})
export class AboutDevelopersModule { }
