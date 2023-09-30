import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SearchBunsRoutingModule } from './search-buns-routing.module';
import { SearchBunsComponent } from './components/search-buns/search-buns.component';



@NgModule({
  declarations: [
    SearchBunsComponent
  ],
  imports: [
    CommonModule,
    SearchBunsRoutingModule
  ]
})
export class SearchBunsModule { }
