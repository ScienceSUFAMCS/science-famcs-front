import { ChangeDetectionStrategy, Component } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { TUI_VALIDATION_ERRORS } from '@taiga-ui/kit';
import { SubmitFormService } from 'src/app/shared/services/submit-form.service';

@Component({
  selector: 'app-auth',
  templateUrl: './auth.component.html',
  styleUrls: ['./auth.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
  providers: [
    {
        provide: TUI_VALIDATION_ERRORS,
        useValue: {
            required: 'Поле не должно быть пустым',
        },
    },
],
})

export class AuthComponent {
 loginForm: FormGroup = new FormGroup({
  login: new FormControl('', [Validators.required]),
  password: new FormControl('', [Validators.required]),
});

 constructor(private submitFormService : SubmitFormService) {

 }

  onSubmit() : void {
    this.submitFormService.submitForm(this.loginForm);
  }
}
