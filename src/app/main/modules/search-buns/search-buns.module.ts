import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SearchBunsRoutingModule } from './search-buns-routing.module';
import { SearchBunsComponent } from './components/search-buns/search-buns.component';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';
import {TuiInputModule} from '@taiga-ui/kit';
import {TuiGroupModule, TuiButtonModule, TuiSvgModule, TuiModeModule} from '@taiga-ui/core';
import {TuiFilterModule} from '@taiga-ui/kit';
import {TuiTableModule} from '@taiga-ui/addon-table';


@NgModule({
  declarations: [
    SearchBunsComponent
  ],
  imports: [
    CommonModule,
    SearchBunsRoutingModule,
    ReactiveFormsModule,
    TuiInputModule,
    FormsModule,
    TuiGroupModule,
    TuiSvgModule,
    TuiButtonModule,
    TuiFilterModule,
    TuiModeModule,
    TuiTableModule,
  ]
})
export class SearchBunsModule { }
