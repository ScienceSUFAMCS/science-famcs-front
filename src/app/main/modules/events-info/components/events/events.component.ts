import { ChangeDetectionStrategy, Component, OnInit } from '@angular/core';
import { TuiDay, TuiDayRange, TuiMonth } from '@taiga-ui/cdk';
import {
  GetEventsService,
  ScienceEvent,
} from '../../services/get-events.service';
import { TuiMarkerHandler } from '@taiga-ui/core';
import { ONE_DOT } from 'src/app/shared/constants/event-dots';

@Component({
  selector: 'app-events',
  templateUrl: './events.component.html',
  styleUrls: ['./events.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class EventsComponent {
  events: ScienceEvent[] = this.eventsService.getAllEvents();

  selectedEvents: ScienceEvent[] = this.events;

  value: TuiDayRange | null = null;

  firstMonth = TuiMonth.currentLocal();

  middleMonth = TuiMonth.currentLocal().append({ month: 1 });

  lastMonth = TuiMonth.currentLocal().append({ month: 2 });

  hoveredItem: TuiDay | null = null;

  readonly markerHandler: TuiMarkerHandler = (day: TuiDay) => {
    return this.events.some((event) =>
      this.dateFilter(day, day, event.startDate, event.endDate)
    )
      ? ONE_DOT
      : [];
  };

  readonly columns = Object.keys(this.events[0]);

  constructor(private eventsService: GetEventsService) {}

  private dateFilter(
    from: TuiDay,
    to: TuiDay,
    filterFrom: TuiDay,
    filterTo: TuiDay
  ): boolean {
    return (
      (from <= filterFrom && filterFrom <= to) ||
      (from <= filterTo && filterTo <= to) ||
      (from >= filterFrom && to <= filterTo)
    );
  }

  showAllEvents(): void {
    this.selectedEvents = this.events;
    this.value = null;
  }

  onDayClick(day: TuiDay): void {
    if (this.value === null || !this.value.isSingleDay) {
      this.value = new TuiDayRange(day, day);
    }

    this.value = TuiDayRange.sort(this.value.from, day);

    this.selectedEvents = this.events.filter((event) => {
      return this.dateFilter(
        event.startDate,
        event.endDate,
        this.value?.from || event.startDate,
        this.value?.to || event.endDate
      );
    });
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
