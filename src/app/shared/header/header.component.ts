import { ChangeDetectionStrategy, Component } from '@angular/core';
import { ThemeService } from './service/theme.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class HeaderComponent {
  constructor(private themeService : ThemeService) {

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
}
