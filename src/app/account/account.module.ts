import { NgModule } from '@angular/core';
import { CommonModule, } from '@angular/common';
import { ReactiveFormsModule } from '@angular/forms';
import { AccountRoutingModule } from './account-routing.module';
import { AuthComponent } from './components/auth/auth.component';
import { RegisterComponent } from './components/register/register.component';
import { TuiAvatarModule, TuiInputModule, TuiInputPasswordModule } from '@taiga-ui/kit';
import { TuiButtonModule, TuiHintModule, TuiLinkModule, TuiTextfieldControllerModule } from '@taiga-ui/core';
import { TuiRadioLabeledModule, TuiInputPhoneInternationalModule } from '@taiga-ui/kit';
import { TuiFieldErrorPipeModule } from '@taiga-ui/kit';
import { TuiErrorModule } from '@taiga-ui/core';
import { ProfileComponent } from './components/profile/profile.component';
import { TuiTableModule } from '@taiga-ui/addon-table';
import { SharedModule } from '../shared/shared.module';
@NgModule({
  declarations: [
    AuthComponent,
    RegisterComponent,
    ProfileComponent,
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
    TuiTextfieldControllerModule,
    TuiFieldErrorPipeModule,
    TuiErrorModule,
    TuiHintModule,
    TuiAvatarModule,
    TuiTableModule,
    SharedModule,
  ]
})
export class AccountModule { }
