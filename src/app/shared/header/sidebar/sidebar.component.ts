import { Component } from '@angular/core';

@Component({
  selector: 'app-sidebar',
  templateUrl: './sidebar.component.html',
  styleUrls: ['./sidebar.component.scss'],
})
export class SidebarComponent {
  open = false;

  readonly pages = [
    { name: 'На главную', icon: 'tuiIconHome', path: 'main/general' },
    { name: 'О нас', icon: 'tuiIconSmile', path: 'main/about' },
    { name: 'Плюшки', icon: 'tuiIconCoffee', path: 'main/search' },
    { name: 'Мероприятия', icon: 'tuiIconCalendar', path: 'main/event' },
    { name: 'Занятия', icon: 'tuiIconBookOpen', path: 'main/classes' },
    { name: 'Присоединиться к нам', icon: 'tuiIconHeart', path: 'main/application' },
    { name: 'Архив', icon: 'tuiIconFolder', path: 'main/archive' },
  ];

  toggle(open: boolean) {
    this.open = open;
  }
}
