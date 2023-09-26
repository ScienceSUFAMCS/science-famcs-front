import { Component } from '@angular/core';

@Component({
  selector: 'app-sidebar',
  templateUrl: './sidebar.component.html',
  styleUrls: ['./sidebar.component.scss']
})
export class SidebarComponent {
  open = false;

  readonly pages = [{ name: 'О нас', icon: 'tuiIconSmile', path: ''},
    { name: 'Плюшки', icon: 'tuiIconCoffee', path: '' }, 
    { name: 'Мероприятия', icon: 'tuiIconCalendar', path: '' },
    { name: 'Занятия', icon: 'tuiIconBookOpen', path: '' },
    { name: 'Присоединиться к нам', icon: 'tuiIconHeart', path: ''},
    { name: 'Архив', icon: 'tuiIconFolder', path: '' }
  ];
 
  toggle(open: boolean) {
    this.open = open;
  }
}
