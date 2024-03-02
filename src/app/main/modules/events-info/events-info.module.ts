import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { EventsInfoRoutingModule } from './events-info-routing.module';
import { EventsComponent } from './components/events/events.component';
import {
  TuiButtonModule,
  TuiCalendarModule,
  TuiLinkModule,
} from '@taiga-ui/core';
import { TuiTableModule } from '@taiga-ui/addon-table';
import { TuiLetModule } from '@taiga-ui/cdk';
import { TuiIslandModule } from '@taiga-ui/kit';

@NgModule({
  declarations: [EventsComponent],
  imports: [
    CommonModule,
    EventsInfoRoutingModule,
    TuiCalendarModule,
    TuiTableModule,
    TuiLetModule,
    TuiButtonModule,
    TuiIslandModule,
    TuiLinkModule,
  ],
})
export class EventsInfoModule {}
