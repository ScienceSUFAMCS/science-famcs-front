import { NgModule } from '@angular/core';
import { CommonModule, } from '@angular/common';
import { ReactiveFormsModule } from '@angular/forms';
import { AccountRoutingModule } from './account-routing.module';
import { AuthComponent } from './components/auth/auth.component';
import { RegisterComponent } from './components/register/register.component';
import { TuiInputModule, TuiInputPasswordModule } from '@taiga-ui/kit';
import { TuiButtonModule, TuiLinkModule } from '@taiga-ui/core';

@NgModule({
  declarations: [
    AuthComponent,
    RegisterComponent
  ],
  imports: [
    CommonModule, 
    AccountRoutingModule, 
    ReactiveFormsModule, 
    TuiInputModule, 
    TuiInputPasswordModule, 
    TuiButtonModule, 
    TuiLinkModule,
  ]
})
export class AccountModule { }
