import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HomePageComponent } from './home-page.component';
import { SwiperModule } from 'ngx-swiper-wrapper';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { RouterModule } from '@angular/router';
import {NgxTypedJsModule} from 'ngx-typed-js';

@NgModule({
  declarations: [HomePageComponent],
  imports: [
    CommonModule,
    SwiperModule,
    NgbModule,
    RouterModule,
    NgxTypedJsModule,
  ]
})
export class HomePageModule { }
