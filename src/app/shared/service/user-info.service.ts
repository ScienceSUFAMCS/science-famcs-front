import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class UserInfoService {
  isLoggedIn() : boolean {
    return (localStorage.getItem('ScienceFamcsToken') ? true : false);
  }
}
