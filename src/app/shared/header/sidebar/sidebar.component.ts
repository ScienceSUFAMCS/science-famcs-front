import { Component } from '@angular/core';

@Component({
  selector: 'app-sidebar',
  templateUrl: './sidebar.component.html',
  styleUrls: ['./sidebar.component.scss'],
})
export class SidebarComponent {
  open = false;

  readonly pages = [
    { name: 'На главную', icon: 'tuiIconSmile', path: 'main/general' },
    { name: 'О нас', icon: 'tuiIconSmile', path: 'main/' },
    { name: 'Плюшки', icon: 'tuiIconCoffee', path: 'main/' },
    { name: 'Мероприятия', icon: 'tuiIconCalendar', path: 'main/' },
    { name: 'Занятия', icon: 'tuiIconBookOpen', path: 'main/' },
    { name: 'Присоединиться к нам', icon: 'tuiIconHeart', path: 'main/' },
    { name: 'Архив', icon: 'tuiIconFolder', path: 'main/' },
  ];

  toggle(open: boolean) {
    this.open = open;
  }
}
