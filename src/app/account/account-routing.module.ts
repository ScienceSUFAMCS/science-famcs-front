import { NgModule } from "@angular/core";
import { Routes, RouterModule } from "@angular/router";
import { AuthComponent } from "./components/auth/auth.component";
import { RegisterComponent } from "./components/register/register.component";
import { ProfileComponent } from "./components/profile/profile.component";
import { authGuard } from "../shared/guards/auth.guard";
const routes : Routes = [
    {
      path: 'login',
      component: AuthComponent,
      canActivate: [authGuard],
    },
    {
        path: 'register',
        component: RegisterComponent,
        canActivate: [authGuard],
    },
    {
        path: 'profile',
        component: ProfileComponent,
        canActivate: [authGuard],
    },
    {
        path: '**',
        redirectTo: '/main/general',
        pathMatch: 'full',
    },
];

@NgModule({
    imports: [RouterModule.forChild(routes)],
    exports: [RouterModule]
})

export class AccountRoutingModule {

}