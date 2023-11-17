import { Injectable } from '@angular/core';
import { User } from '../interfaces/user';

@Injectable({
  providedIn: 'root'
})
export class UserInfoService {
  isLoggedIn() : boolean {
    return (localStorage.getItem('ScienceFamcsToken') ? true : false);
  }

  getUser() : User{
    if (this.isLoggedIn()) {
      return {
        name: 'Станислав',
        surname: 'Зайцев',
        login: 'krollikroddzer',
        is_active: false,
        role: 'Студент',
        email: 'krollikroddzer@mail.ru',
        telegram: '@KrollikRoddzer',
      };
    }
    
    throw new Error("Cannot get user.")
  }

  logOut() : void {
    localStorage.removeItem('ScienceFamcsToken');
    location.reload();
  }
}
