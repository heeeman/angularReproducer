import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { OtherPageComponent } from './other-page/other-page.component';
import { OtherPageRoutingModule } from './other-page-routing.module';



@NgModule({
  declarations: [
    OtherPageComponent
  ],
  imports: [
    CommonModule,
    OtherPageRoutingModule
  ],
  exports: [OtherPageComponent]
})
export class OtherPageModule { }
