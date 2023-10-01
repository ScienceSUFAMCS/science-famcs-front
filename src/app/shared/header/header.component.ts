import { ChangeDetectionStrategy, Component } from '@angular/core';
import { ThemeService } from './service/theme.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class HeaderComponent {
  constructor(private themeService : ThemeService, private router: Router) {

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

  public onAccountClick() : void {
    this.router.navigate(['/account/login'])
  }
}
