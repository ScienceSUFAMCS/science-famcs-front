import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path: 'main',
    loadChildren: () => import('./main/main.module').then((m) => m.MainModule),
  },
  {
    path: 'account',
    loadChildren: () => import('./account/account.module').then((m) => m.AccountModule),
  },
  {
    path: '**',
    redirectTo: 'main/general',
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
