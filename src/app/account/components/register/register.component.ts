import { ChangeDetectionStrategy, Component } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.scss', '../auth/auth.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})

export class RegisterComponent {
  readonly registerForm = new FormGroup({
    firstName : new FormControl(''),
    lastName : new FormControl(''),
    patronymic : new FormControl(''),
    login : new FormControl(''),
    password : new FormControl(''),
    repeatPassword: new FormControl(''),
  });
}
