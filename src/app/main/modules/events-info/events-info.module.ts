import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { EventsInfoRoutingModule } from './events-info-routing.module';
import { EventsComponent } from './components/events/events.component';
import { TuiCalendarModule } from '@taiga-ui/core';
import { TuiTableModule } from '@taiga-ui/addon-table';
import { TuiLetModule } from '@taiga-ui/cdk';

@NgModule({
  declarations: [EventsComponent],
  imports: [
    CommonModule,
    TuiCalendarModule,
    EventsInfoRoutingModule,
    TuiTableModule,
    TuiLetModule,
  ],
})
export class EventsInfoModule {}
