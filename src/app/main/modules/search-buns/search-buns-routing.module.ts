import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { SearchBunsComponent } from './components/search-buns/search-buns.component';

const routes : Routes = [
  {
    path: '',
    component: SearchBunsComponent,
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class SearchBunsRoutingModule { }
