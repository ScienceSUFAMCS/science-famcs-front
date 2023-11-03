import { NgModule } from "@angular/core";
import { Routes, RouterModule } from "@angular/router";
import { AuthComponent } from "./components/auth/auth.component";
import { RegisterComponent } from "./components/register/register.component";
import { ProfileComponent } from "./components/profile/profile.component";

const routes : Routes = [
    {
      path: 'login',
      component: AuthComponent,  
    },
    {
        path: 'register',
        component: RegisterComponent,
    },
    {
        path: 'profile',
        component: ProfileComponent
    },
    {
        path: '',
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