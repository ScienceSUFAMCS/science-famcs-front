import { ChangeDetectionStrategy, Component } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { TUI_VALIDATION_ERRORS } from '@taiga-ui/kit';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.scss', '../auth/auth.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
  providers: [
    {
      provide: TUI_VALIDATION_ERRORS,
      useValue: {
        required: 'Это поле является обязательным',
        minlength: ({requiredLength} : {requiredLength : string}) => `Минимальная длина строки ${requiredLength} символа`,
        maxlength: ({requiredLength} : {requiredLength : string}) => `Максимальная длина строки ${requiredLength} символов`,
      }
    }
  ],
})

export class RegisterComponent {
  readonly registerForm = new FormGroup({
    firstName : new FormControl('', [Validators.required, Validators.minLength(2), Validators.maxLength(60)]),
    lastName : new FormControl('', [Validators.required, Validators.minLength(2), Validators.maxLength(60)]),
    patronymic : new FormControl('', [Validators.minLength(2), Validators.maxLength(60)]),
    login : new FormControl('', [Validators.required, Validators.maxLength(60)]),
    password : new FormControl('', [Validators.required, Validators.minLength(8)]),
    repeatPassword: new FormControl('', [Validators.required]),
  });
}
