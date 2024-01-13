import { ChangeDetectionStrategy, Component, OnInit } from '@angular/core';
import { TuiDay, TuiDayRange, TuiMonth } from '@taiga-ui/cdk';
import {
  GetEventsService,
  ScienceEvent,
} from '../../services/get-events.service';

@Component({
  selector: 'app-events',
  templateUrl: './events.component.html',
  styleUrls: ['./events.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class EventsComponent {
  events: ScienceEvent[] = this.eventsService.getAllEvents();

  value: TuiDayRange | null = null;

  firstMonth = TuiMonth.currentLocal();

  middleMonth = TuiMonth.currentLocal().append({ month: 1 });

  lastMonth = TuiMonth.currentLocal().append({ month: 2 });

  hoveredItem: TuiDay | null = null;

  readonly columns = Object.keys(this.events[0]);

  constructor(private eventsService: GetEventsService) {}

  onDayClick(day: TuiDay): void {
    if (this.value === null || !this.value.isSingleDay) {
      this.value = new TuiDayRange(day, day);
    }

    this.value = TuiDayRange.sort(this.value.from, day);
  }

  onMonthChangeFirst(month: TuiMonth): void {
    this.firstMonth = month;
    this.middleMonth = month.append({ month: 1 });
    this.lastMonth = month.append({ month: 2 });
  }

  onMonthChangeMiddle(month: TuiMonth): void {
    this.firstMonth = month.append({ month: -1 });
    this.middleMonth = month;
    this.lastMonth = month.append({ month: 1 });
  }

  onMonthChangeLast(month: TuiMonth): void {
    this.firstMonth = month.append({ month: -2 });
    this.middleMonth = month.append({ month: -1 });
    this.lastMonth = month;
  }
}
