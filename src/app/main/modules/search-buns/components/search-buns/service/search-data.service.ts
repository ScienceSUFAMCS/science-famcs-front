import { Injectable } from '@angular/core';
import { QueryFile } from 'src/app/shared/interface/query-file.interface';

@Injectable({
  providedIn: 'root'
})
export class SearchDataService {
  private data: QueryFile[] = [
    { name: 'Математический анализ, 1 семестр', author: 'Мазаник А.С.', subject: 'ДиИИ', type: 'конспект' },
    { name: 'Курс лекций по математическому анализу для студентов 1 курса ФПМИ специальности “Информатика“, 1 сем', author: 'Булатов В.И', subject: 'ДИиИ', type: 'конспект' },
    { name: 'Лекция 1. Булевы функции, 2 семестр', author: 'Ловеров', subject: 'ДМиМЛ', type: 'конспект' },
    { name: 'Конспект ДМиМЛ рукописный', author: 'Орлович Ю.Л.', subject: 'ДМиМЛ', type: 'конспект' },
  ];
  getData(): QueryFile[] {
    return this.data;
  }
}
