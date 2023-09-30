import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ApplicationToScienceComponent } from './components/application-to-science/application-to-science.component';

const routes: Routes = [
  {
    path: '',
    component: ApplicationToScienceComponent,
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ApplicationToScienceRoutingModule { }
