import { ChangeDetectionStrategy, Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { TUI_VALIDATION_ERRORS } from '@taiga-ui/kit';

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

export class AuthComponent implements OnInit {
 loginForm: FormGroup;

  ngOnInit(): void {
    this.loginForm = new FormGroup({
      login: new FormControl('', [Validators.required]),
      password: new FormControl('', [Validators.required]),
    });
  }

  onSubmit() : void {
    console.log(this.loginForm.value);
  }
}
