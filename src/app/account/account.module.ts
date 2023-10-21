import { NgModule } from '@angular/core';
import { CommonModule, } from '@angular/common';
import { ReactiveFormsModule } from '@angular/forms';
import { AccountRoutingModule } from './account-routing.module';
import { AuthComponent } from './components/auth/auth.component';
import { RegisterComponent } from './components/register/register.component';
import { TuiInputModule, TuiInputPasswordModule } from '@taiga-ui/kit';
import { TuiButtonModule, TuiLinkModule, TuiTextfieldControllerModule } from '@taiga-ui/core';
import { TuiRadioLabeledModule, TuiInputPhoneInternationalModule } from '@taiga-ui/kit';

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
    TuiRadioLabeledModule,
    TuiInputPhoneInternationalModule,
    TuiTextfieldControllerModule
  ]
})
export class AccountModule { }
