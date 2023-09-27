import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { GeneralComponent } from './components/general/general.component';
import { GeneralnRoutingModule } from './general-routing.module';

@NgModule({
  declarations: [GeneralComponent],
  imports: [CommonModule, GeneralnRoutingModule],
})
export class GeneralModule {}
