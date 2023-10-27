import { AbstractControl, ValidationErrors, ValidatorFn } from "@angular/forms";

export function matchValidator(controlToCompare : AbstractControl | null) : ValidatorFn {
    return (control : AbstractControl) : ValidationErrors | null => {
        if (control?.value === controlToCompare?.value) {
            return null;
        }
        return { message: 'Пароли не совпадают'};
    }
}