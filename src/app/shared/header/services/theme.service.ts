import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ThemeService {
  private theme = 'tuiIconSunLarge';
  public readonly standartThemeIndex : number = 0;
  public readonly themes : string[] = ['tuiIconSunLarge', 'tuiIconMoonLarge'];

  constructor() { 
    if (localStorage.getItem('app-theme') !== null) {
      this.theme = String(localStorage.getItem('app-theme'));
    }
    else {
      this.theme = this.themes[this.standartThemeIndex];
      localStorage.setItem('app-theme', this.theme);
    }
  }

  public getTheme() : string {
    return this.theme;
  }

  public changeTheme() : void {
    if (this.theme === this.themes[0]) {
      this.theme = this.themes[1];
    }
    else {
      this.theme = this.themes[0];
    }
    localStorage.setItem('app-theme', this.theme);
  }

  public isDark() : boolean {
    return this.themes[1] === this.theme;
  }
}
