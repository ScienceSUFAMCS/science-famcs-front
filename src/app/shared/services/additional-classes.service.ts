import { Injectable } from '@angular/core';
import { ExtraClass } from '../interfaces/extra-class';

@Injectable({
  providedIn: 'root'
})
export class AdditionalClassesService {
  private data: ExtraClass[] = [
    { 
      subject: 'Диффуры', 
      teacher: 'Тимофей Бовт', 
      group_chat: 'https://www.youtube.com/watch?v=dQw4w9WgXcQ&ab_channel=RickAstley', 
      description: 'Тайный танец производных, раскрывающий гармонию математического мира.',
      info: 'Проходит примерно плюс минус по вторникам после обэда',
      image: 'https://sun9-57.userapi.com/impf/mmLTZW3McGMfFEaapKqLVv0oBw7tn0UCBmANiQ/iJG9MvsWwSM.jpg?size=604x421&quality=96&sign=9e9eac50767d940d6ac8da675c6cc5ec&type=album'
    },
    { 
      subject: 'C++', 
      teacher: 'Антон Семенченко', 
      group_chat: 'https://www.youtube.com/watch?v=dQw4w9WgXcQ&ab_channel=RickAstley', 
      description: 'Пишем быстрые алгосы',
      info: `Вы сделали лошадь.

      Она уродлива как ночь и у неё видно изнанку, но зато она справляется со своей работой.`,
      image: 'https://images7.memedroid.com/images/UPLOADED772/60297fe91382d.jpeg'
    },
    { 
      subject: 'Java', 
      teacher: 'Джава Витальевна', 
      group_chat: 'https://www.youtube.com/watch?v=dQw4w9WgXcQ&ab_channel=RickAstley', 
      description: 'Не путать с JavaScript!!!',
      info: `Вы очень хотите сделать лошадь.

      Но сначала вам нужно сделать завод по производству лошадей.`,
      image: ''
    },
    { 
      subject: 'JavaScript', 
      teacher: 'Женя Рысь', 
      group_chat: 'https://www.youtube.com/watch?v=dQw4w9WgXcQ&ab_channel=RickAstley', 
      description: 'Не путать с Java!!!',
      info: `Вам прислали лошадь в разных пакетах.

      Вы собрали лошадь, но тазовая кость есть только в Angular, поэтому лошадка оказалась парализована.`,
      image: 'https://www.freecodecamp.org/news/content/images/2019/07/panel-3-1.png'
    }
  ];
  getData(): ExtraClass[] {
    return this.data;
  }
}
