import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'isUndefinedUserData'
})
export class IsUndefinedUserDataPipe implements PipeTransform {

  transform(value: string | number | undefined): string | number{
    if (value === undefined) {
      return 'Не указан';
    }
    return value;
  }

}
