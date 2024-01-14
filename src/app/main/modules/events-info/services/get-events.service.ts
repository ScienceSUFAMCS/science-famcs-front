import { Injectable } from '@angular/core';
import { TuiDay } from '@taiga-ui/cdk';

export interface ScienceEvent {
  name: string;
  startDate: TuiDay;
  endDate: TuiDay;
  description: string;
}

@Injectable({
  providedIn: 'root',
})
export class GetEventsService {
  private events: ScienceEvent[] = [
    {
      name: 'New Year',
      startDate: new TuiDay(2024, 0, 1),
      endDate: new TuiDay(2024, 0, 7),
      description: 'some info',
    },
    {
      name: 'Last Exam',
      startDate: new TuiDay(2024, 0, 20),
      endDate: new TuiDay(2024, 0, 20),
      description: `some large info sdfkshdkjfhjkshgjkshfgdsghds
       sdfgh shsdfh ghsdfjk ghsjdfg hjkdsf ghjkdshfgjhds 
       dshk dh kh djfd shjkgdh sdfg  dsjf sd fkg shdsf 
       jk sdk dhgsdf jklgds hg dsjhk sjdgl`,
    },
    {
      name: 'Preparing',
      startDate: new TuiDay(2024, 0, 20),
      endDate: new TuiDay(2024, 1, 1),
      description: 'some info sdafsd f',
    },
    {
      name: 'Big event',
      startDate: new TuiDay(2024, 1, 1),
      endDate: new TuiDay(2024, 2, 7),
      description: 'some little info',
    },
  ];

  getAllEvents(): ScienceEvent[] {
    return this.events;
  }

  getEventsInDateRange(startDate: TuiDay, endDate: TuiDay): ScienceEvent[] {
    return this.events.filter(
      (event) => event.startDate === startDate && event.endDate === endDate
    );
  }
}
