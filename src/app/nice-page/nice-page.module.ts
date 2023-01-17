import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NicePageComponent } from './nice-page/nice-page.component';
import { NicePageRoutingModule } from './nice-page-routing.module';



@NgModule({
  declarations: [
    NicePageComponent
  ],
  imports: [
    CommonModule,
    NicePageRoutingModule
  ],
  exports: [NicePageComponent]
})
export class NicePageModule { }
