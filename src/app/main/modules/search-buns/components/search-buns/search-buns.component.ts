import { ChangeDetectionStrategy, Component, ContentChild, ElementRef, OnInit } from '@angular/core';
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

  searchForm: FormGroup = new FormGroup({
    subject: new FormControl(),
    name: new FormControl(),
    author: new FormControl(),
    filters: new FormControl([])
  })

  searchData: QueryFile[] = [];

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

  searchResult: QueryFile[] = [];
  constructor(private searchDataService: SearchDataService) { }
  ngOnInit() {
    this.searchResult = this.searchDataService.getData();
  }

  onSubmit(): void {
    console.log(this.searchForm.value)
    
    let subjectTable = document.getElementById('sub');
    let btnBackToSubjects = document.getElementById('btnBack')
    let searchResultTable = document.getElementById('result');

    if (subjectTable != undefined) {
      subjectTable.style.display = 'none';
    }
    btnBackToSubjects?.classList.remove('display-none');
    searchResultTable?.classList.remove('display-none');
  }


  backClick(): void {
    let subjectTable = document.getElementById('sub');
    let btnBackToSubjects = document.getElementById('btnBack')
    let searchResultTable = document.getElementById('result');

    if (subjectTable != undefined) {
      subjectTable.style.display = '';
    }
    btnBackToSubjects?.classList.add('display-none');
    searchResultTable?.classList.add('display-none');
  }

  openFileClick(event: any): void {
    alert(`Пока что мы не можем открыть "${event.currentTarget.cells.item(0).innerHTML
      }" :(`);
  }
}
