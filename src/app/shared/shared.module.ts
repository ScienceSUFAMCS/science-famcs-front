import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HeaderComponent } from './header/header.component';
import { TuiButtonModule, TuiSvgModule } from '@taiga-ui/core';
import { TuiAppBarModule } from '@taiga-ui/addon-mobile';


@NgModule({
  declarations: [
    HeaderComponent
  ],
  imports: [
    CommonModule,
    TuiButtonModule,
    TuiSvgModule,
    TuiAppBarModule
  ],
  exports: [
    HeaderComponent
  ]
})
export class SharedModule { }
