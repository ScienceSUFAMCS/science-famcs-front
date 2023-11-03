import { Injectable } from '@angular/core';
import { User } from '../interface/user';

@Injectable({
  providedIn: 'root'
})
export class UserInfoService {
  isLoggedIn() : boolean {
    return (localStorage.getItem('ScienceFamcsToken') ? true : false);
  }

  getUser() : User | undefined{
    if (this.isLoggedIn()) {
      return {
        name: 'Stas',
        surname: 'Zaycev',
        login: 'krollikroddzer',
        is_active: false,
        role: 'Student',
      };
    }
    
    return undefined;
  }
}
