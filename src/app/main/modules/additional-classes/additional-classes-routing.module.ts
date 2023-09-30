import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AdditionalClassesComponent } from './components/additional-classes/additional-classes.component';

const routes: Routes = [
  {
    path: '',
    component: AdditionalClassesComponent,
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class AdditionalClassesRoutingModule { }
