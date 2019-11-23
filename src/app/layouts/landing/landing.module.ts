import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { LandingComponent } from './landing.component';
import { HeaderModule } from './header/header.module';
import { FooterModule } from './footer/footer.module';
import { RouterModule } from '@angular/router';
import { SideMenuModule } from './components/side-menu/side-menu.module';

@NgModule({
  declarations: [LandingComponent],
  imports: [
    CommonModule,
    RouterModule,
    HeaderModule,
    FooterModule,
    SideMenuModule
  ]
})
export class LandingModule { }
