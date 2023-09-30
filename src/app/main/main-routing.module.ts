import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { MainComponent } from './main/main.component';

const routes: Routes = [
  {
    path: '',
    component: MainComponent,
    children: [
      {
        path: 'general',
        loadChildren: () =>
          import('./modules/general/general.module').then(
            (m) => m.GeneralModule
          ),
      },
      {
        path: 'about',
        loadChildren: () => import('./modules/about/about.module').then((m) => m.AboutModule),
      },
      {
        path: 'search',
        loadChildren: () => import('./modules/search-buns/search-buns.module').then((m) => m.SearchBunsModule),
      },
      {
        path: 'event',
        loadChildren: () => import('./modules/events-info/events-info.module').then((m) => m.EventsInfoModule),
      },
      {
        path: '**',
        redirectTo: 'general',
      },
    ],
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class MainRoutingModule {}
