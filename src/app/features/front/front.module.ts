import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FrontRoutingModule } from './front-routing.module';
import { HomePageModule } from './pages/home-page/home-page.module';
import { ContactModule } from './pages/contact/contact.module';

@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    FrontRoutingModule,
    HomePageModule,
    ContactModule,
  ]
})
export class FrontModule { }
