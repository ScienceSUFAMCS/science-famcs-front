import { ChangeDetectionStrategy, Component, OnInit } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { SearchDataService } from './service/search-data.service';
import { QueryFile } from 'src/app/shared/interface/query-file.interface';


@Component({
  selector: 'app-search-buns',
  templateUrl: './search-buns.component.html',
  styleUrls: ['./search-buns.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
  providers: [SearchDataService]
})
export class SearchBunsComponent implements OnInit {
  subject = ''
  name = ''
  author = ''

  readonly items = [
    'Конспекты',
    'Методички',
    'Книги',
    'Другое'
  ];

  SearchForm: FormGroup = new FormGroup({
    subject: new FormControl(),
    name: new FormControl(),
    author: new FormControl(),
    filter: new FormGroup({
      filters: new FormControl(this.items)
    })
  })

  searchData: QueryFile[] =[];
  constructor(private searchDataService: SearchDataService) { }

  ngOnInit() {
    this.searchData = this.searchDataService.getData();
  }

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

  onSubmit(): void {
    alert('поиск не работает :(')
  }

}
