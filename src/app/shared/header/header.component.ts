import { ChangeDetectionStrategy, Component } from '@angular/core';
import { ThemeService } from './service/theme.service';
import { Router } from '@angular/router';
import { UserInfoService } from '../service/user-info.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class HeaderComponent {
  loggedIn : boolean;
  
  constructor(private themeService : ThemeService, private userInfoService : UserInfoService, private router: Router) {
    this.loggedIn = userInfoService.isLoggedIn();
  }

  public getTheme() : string {
    return this.themeService.getTheme();
  }

  public isDark() : boolean {
    return this.themeService.isDark();
  }

  public changeTheme() : void {
    this.themeService.changeTheme();
  }

  public onLoginClick() : void {
    this.router.navigate(['/account/login'])
  }

  public onRegisterClick() : void {
    this.router.navigate(['/account/register']);
  }

  public onLogOutClick() : void {
    throw new Error("Not implemented");
  }

  public onProfileClick() : void {
      throw new Error('Not implemented');
  }
}
