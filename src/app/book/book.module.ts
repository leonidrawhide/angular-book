import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AppModule } from '../app.module';
import { PageOneComponent } from './page-one/page-one.component';
import { PageTwoComponent } from './page-two/page-two.component';
import { PageThreeComponent } from './page-three/page-three.component';
import { PageFourComponent } from './page-four/page-four.component';
import { PageFiveComponent } from './page-five/page-five.component';



@NgModule({
  declarations: [
    PageOneComponent, 
    PageTwoComponent, 
    PageThreeComponent, 
    PageFourComponent, 
    PageFiveComponent
  ],
  imports: [
    CommonModule,
    AppModule
  ]
})
export class BookModule { }
