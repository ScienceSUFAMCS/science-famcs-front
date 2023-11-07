import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'isNullOrUndefinedUserData'
})
export class IsNullOrUndefinedUserDataPipe implements PipeTransform {

  transform(value: string | number | null | undefined): string {
    if (!value) {
      return 'Не указано';
    }
    return String(value);
  }

}
