import { inject } from '@angular/core';
import { CanActivateFn, Router } from '@angular/router';
import { UserInfoService } from '../services/user-info.service';

export const authGuard: CanActivateFn = (route, state) => {
  const userInfoService = inject(UserInfoService);
  const router = inject(Router);
  const path = route.url[0].path;
  if (path === 'profile') {
    if (!userInfoService.isLoggedIn()) {
      router.navigate(['/account/login']);
    }
    return userInfoService.isLoggedIn();
  }
  else if (path === 'login' || path === 'register') {
    if (userInfoService.isLoggedIn()) {
      router.navigate(['/account/profile']);
    }
    return !userInfoService.isLoggedIn();
  }

  throw new Error('AuthGuard does not support this path.')
};
