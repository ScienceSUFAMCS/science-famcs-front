import { ChangeDetectionStrategy, Component } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';

@Component({
  selector: 'app-search-buns',
  templateUrl: './search-buns.component.html',
  styleUrls: ['./search-buns.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class SearchBunsComponent {
  search = ''

  filterForm = new FormGroup({
    filters: new FormControl(['Конспекты', 'Методички', 'Книги', 'Другое'])
  });

  readonly items = [
    'Конспекты',
    'Методички',
    'Книги',
    'Другое'
  ];

  readonly subjects = [
    { name: 'ДМиМЛ', description: 'Дискретная математика и математическая логика', color: 'var(--tui-support-05)' },
    { name: 'МО', description: 'Методы оптимизации', color: 'var(--tui-support-02)' },
    { name: 'ОВАиАГ', description: 'чё-то там и аналитическая геометрия', color: 'var(--tui-support-10)' },
    { name: 'Англ', description: 'Английский язык', color: 'var(--tui-support-16)' },
    { name: 'АиСД', description: 'Алгоритмы и структуры данных', color: 'var(--tui-support-14)' },
    { name: 'ДиИИ', description: 'МА в простонародье', color: 'var(--tui-support-16)' },
  ];

}
