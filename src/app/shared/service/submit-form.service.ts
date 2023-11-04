import { Injectable } from '@angular/core';
import { FormGroup } from '@angular/forms';

@Injectable({
  providedIn: 'root'
})

export class SubmitFormService {
  public submitForm(form : FormGroup) : void {
    if (!form) return;
  
    if (form.valid) {
      console.log(form.value);
    } else {
      form.markAllAsTouched();
    }

    localStorage.setItem('ScienceFamcsToken', '142123');
    location.reload();
  }
}
