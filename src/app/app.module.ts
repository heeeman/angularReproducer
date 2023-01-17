import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { OtherPageModule } from './other-page/other-page.module';
import { NicePageComponent } from './nice-page/nice-page/nice-page.component';
import { NicePageModule } from './nice-page/nice-page.module';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    // OtherPageModule,
    // NicePageModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
