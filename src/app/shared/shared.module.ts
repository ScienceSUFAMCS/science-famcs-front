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


@NgModule({
  declarations: [
    HeaderComponent,
    FooterComponent,
    SidebarComponent
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
    TuiActiveZoneModule
  ],
  exports: [
    HeaderComponent,
    FooterComponent
  ]
})
export class SharedModule { }
