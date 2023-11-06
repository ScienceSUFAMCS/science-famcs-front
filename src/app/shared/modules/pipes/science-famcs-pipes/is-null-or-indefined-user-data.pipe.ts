import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'isNullOrIndefinedUserData'
})
export class IsNullOrIndefinedUserDataPipe implements PipeTransform {

  transform(value: string | number | undefined | null): string {
    if (!value) {
      return 'Не указан';
    }
    return String(value);
  }

}
