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

  readonly items = [
    'Конспекты',
    'Методички',
    'Книги',
    'Другое'
  ];

  filterForm = new FormGroup({
    filters: new FormControl(this.items)
  });

  readonly subjects = [
    { name: 'ДМиМЛ', description: 'Дискретная математика и математическая логика' },
    { name: 'МО', description: 'Методы оптимизации' },
    { name: 'ОВАиАГ', description: 'чё-то там и аналитическая геометрия' },
    { name: 'Англ', description: 'Английский язык' },
    { name: 'АиСД', description: 'Алгоритмы и структуры данных' },
    { name: 'ДиИИ', description: 'МА в простонародье' },
    { name: 'МатМод', description: 'Математическое моделирование' },
  ];

  colors = [
    'var(--tui-support-05)',
    'var(--tui-support-02)',
    'var(--tui-support-10)',
    'var(--tui-support-16)',
    'var(--tui-support-14)'
  ]

}
