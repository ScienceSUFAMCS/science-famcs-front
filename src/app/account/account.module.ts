import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AccountRoutingModule } from './account-routing.module';
import { AuthComponent } from './components/auth/auth.component';
import { RegisterComponent } from './components/register/register.component';



@NgModule({
  declarations: [
    AuthComponent,
    RegisterComponent
  ],
  imports: [
    CommonModule, AccountRoutingModule
  ]
})
export class AccountModule { }
