import { Injectable } from '@angular/core';
import { FormGroup } from '@angular/forms';

@Injectable({
  providedIn: 'root'
})

export class SubmitFormService {
  constructor() { }

  public submitForm(form : FormGroup) : void {
    if (!form) return;
  
    if (form.valid) {
      console.log(form.value);
    } else {
      form.markAllAsTouched();
    }
  }
}