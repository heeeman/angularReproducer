import { NgModule } from '@angular/core';

import { RouterModule, Routes } from '@angular/router';
import { NicePageComponent } from './nice-page/nice-page.component';


const routes: Routes = [
  {
    path: '',
    component: NicePageComponent,
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class NicePageRoutingModule {
}
