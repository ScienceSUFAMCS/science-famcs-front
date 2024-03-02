import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {TuiLinkModule} from '@taiga-ui/core';
import {TuiButtonModule} from '@taiga-ui/core';
import {TuiIslandModule} from '@taiga-ui/kit';

import { AdditionalClassesRoutingModule } from './additional-classes-routing.module';
import { AdditionalClassesComponent } from './components/additional-classes/additional-classes.component';


@NgModule({
  declarations: [
    AdditionalClassesComponent
  ],
  imports: [
    CommonModule,
    AdditionalClassesRoutingModule,
    TuiLinkModule,
    TuiButtonModule,
    TuiIslandModule,
  ],
  bootstrap: [AdditionalClassesComponent]
})
export class AdditionalClassesModule { }
