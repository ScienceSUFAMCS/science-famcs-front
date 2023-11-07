import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HeaderComponent } from './header/header.component';
import { TuiButtonModule, TuiModeModule, TuiSvgModule, TuiThemeNightModule } from '@taiga-ui/core';
import { TuiAppBarModule } from '@taiga-ui/addon-mobile';
import { FooterComponent } from './footer/footer.component';
import { TuiLinkModule } from '@taiga-ui/core';
import { SidebarComponent } from './header/sidebar/sidebar.component'
import { TuiSidebarModule } from '@taiga-ui/addon-mobile';
import { TuiActiveZoneModule } from '@taiga-ui/cdk';
import { TuiDropdownModule } from '@taiga-ui/core';
import { IsNullOrUndefinedUserDataPipe } from './pipes/is-null-or-undefined-user-data.pipe';

@NgModule({
  declarations: [
    HeaderComponent,
    FooterComponent,
    SidebarComponent,
    IsNullOrUndefinedUserDataPipe,
  ],
  imports: [
    CommonModule,
    TuiButtonModule,
    TuiSvgModule,
    TuiAppBarModule,
    TuiLinkModule,
    TuiThemeNightModule,
    TuiModeModule,
    TuiSidebarModule,
    TuiActiveZoneModule,
    TuiDropdownModule,
  ],
  exports: [
    HeaderComponent,
    FooterComponent,
    IsNullOrUndefinedUserDataPipe,
  ],
})
export class SharedModule { }
