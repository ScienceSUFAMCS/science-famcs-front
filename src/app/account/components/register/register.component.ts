import { ChangeDetectionStrategy, Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { TUI_VALIDATION_ERRORS } from '@taiga-ui/kit';
import { matchValidator } from 'src/app/shared/validators/match.validator';

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
        pattern: () => 'Поле заполнено не верно',
      }
    }
  ],
})

export class RegisterComponent implements OnInit {
  registerForm : FormGroup;
  passwordRegExp = new RegExp(/^(?=.*\d)(?=.*[a-z])(?=.*[A-Z]).*$/);
  loginRegExp = new RegExp(/^[a-zA-Z0-9_]+$/);

  ngOnInit(): void {
    this.registerForm = new FormGroup({
      firstName : new FormControl('', [Validators.required, Validators.minLength(2), Validators.maxLength(60)]),
      lastName : new FormControl('', [Validators.required, Validators.minLength(2), Validators.maxLength(60)]),
      patronymic : new FormControl('', [Validators.minLength(2), Validators.maxLength(60)]),
      login : new FormControl('', [Validators.required, Validators.maxLength(60), Validators.pattern(this.loginRegExp)]),
      password : new FormControl('', [Validators.required, Validators.minLength(8), Validators.pattern(this.passwordRegExp)]),
    });

    this.registerForm.setControl('repeatPassword', new FormControl('', [Validators.required, matchValidator(this.registerForm.get('password'))]));
  }

  onSubmit() : void {
    console.log(this.registerForm.value);
  }
}
