import { NgModule } from '@angular/core';

import { RouterModule, Routes } from '@angular/router';
import { PageOneComponent } from './book/page-one/page-one.component';
import { PageTwoComponent } from './book/page-two/page-two.component';
import { PageThreeComponent } from './book/page-three/page-three.component';
import { PageFourComponent } from './book/page-four/page-four.component';
import { PageFiveComponent } from './book/page-five/page-five.component';

const routes: Routes = [
  { path: '', redirectTo: '/page-1', pathMatch: 'full' },
  { path: 'page-1', component: PageOneComponent },
  { path: 'page-2', component: PageTwoComponent },
  { path: 'page-3', component: PageThreeComponent },
  { path: 'page-4', component: PageFourComponent },
  { path: 'page-5', component: PageFiveComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }