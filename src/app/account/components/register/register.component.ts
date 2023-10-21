import { ChangeDetectionStrategy, Component } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import {TuiCountryIsoCode} from '@taiga-ui/i18n';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.scss', '../auth/auth.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})

export class RegisterComponent {
  readonly registerFormGroup = new FormGroup({
    sexInput: new FormControl(),
    phone: new FormControl(),
  });

  readonly contries = Object.values(TuiCountryIsoCode);
  
  countruIsoCode = TuiCountryIsoCode.BY;
}
