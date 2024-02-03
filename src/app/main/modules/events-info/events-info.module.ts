import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { EventsInfoRoutingModule } from './events-info-routing.module';
import { EventsComponent } from './components/events/events.component';


@NgModule({
  declarations: [EventsComponent],
  imports: [
    CommonModule,
    EventsInfoRoutingModule,
  ],
})
export class EventsInfoModule {}
