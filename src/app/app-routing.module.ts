import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { NicePageComponent } from './nice-page/nice-page/nice-page.component';
import { OtherPageComponent } from './other-page/other-page/other-page.component';

const routes: Routes = [
  {
    path: 'nice-page',
    loadChildren: () => import('./nice-page/nice-page.module').then(m => m.NicePageModule)
    //component: NicePageComponent
  },
  {
    path: 'other-page',
    loadChildren: () => import('./other-page/other-page.module').then(m => m.OtherPageModule)
    // component: OtherPageComponent
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
