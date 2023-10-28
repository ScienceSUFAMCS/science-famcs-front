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

}
