import { Injectable } from '@angular/core';
import { QueryFile } from 'src/app/shared/interfaces/query-file.interface';

@Injectable({
  providedIn: 'root'
})
export class SearchDataService {
  private data: QueryFile[] = [
    { name: 'Математический анализ, 1 семестр', author: 'Мазаник А.С', subject: 'ДиИИ', type: 'конспекты' },
    { name: 'Курс лекций по математическому анализу для студентов 1 курса ФПМИ специальности “Информатика“, 1 сем', author: 'Булатов В.И', subject: 'ДИиИ', type: 'конспекты' },
    { name: 'Лекция 1. Булевы функции, 2 семестр', author: 'Ловеров', subject: 'ДМиМЛ', type: 'конспекты' },
    { name: 'Конспект ДМиМЛ рукописный', author: 'Орлович Ю.Л.', subject: 'ДМиМЛ', type: 'конспекты' },
  ];
  getData(): QueryFile[] {
    return this.data;
  }
}
