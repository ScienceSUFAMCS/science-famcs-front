import { Injectable } from '@angular/core';
import { TuiDay } from '@taiga-ui/cdk';

export interface ScienceEvent {
  name: string;
  startDate: TuiDay;
  endDate: TuiDay;
  description: string;
  link: string;
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
      link: 'https://www.instagram.com/science_famcs/',
    },
    {
      name: 'Last Exam',
      startDate: new TuiDay(2024, 0, 20),
      endDate: new TuiDay(2024, 0, 20),
      description: `some large info sdfkshdkjfhjkshgjkshfgdsghds
       sdfgh shsdfh ghsdfjk ghsjdfg hjkdsf ghjkdshfgjhds 
       dshk dh kh djfd shjkgdh sdfg  dsjf sd fkg shdsf 
       jk sdk dhgsdf jklgds hg dsjhk sjdgl`,
      link: 'https://www.instagram.com/science_famcs/',
    },
    {
      name: 'Preparing',
      startDate: new TuiDay(2024, 0, 20),
      endDate: new TuiDay(2024, 1, 1),
      description: 'some info sdafsd f',
      link: 'https://www.instagram.com/science_famcs/',
    },
    {
      name: 'Big event',
      startDate: new TuiDay(2024, 1, 1),
      endDate: new TuiDay(2024, 2, 7),
      description: 'some little info',
      link: 'https://www.instagram.com/science_famcs/',
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
