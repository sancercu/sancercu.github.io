import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { LandingComponent } from './layouts/landing/landing.component';
import { LandingModule } from './layouts/landing/landing.module';
import { NotFoundPageModule } from './pages/not-found-page/not-found-page.module';
import { NotFoundPageComponent } from './pages/not-found-page/not-found-page.component';


const routes: Routes = [
  {
    path: '',
    component: LandingComponent,
    children: [
      {
        path: '',
        loadChildren: () =>
          import('./features/front/front.module').then(m => m.FrontModule)
      }
    ]
  },
  { path: '**', component: NotFoundPageComponent }
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, { scrollPositionRestoration: 'enabled' }),
    LandingModule,
    NotFoundPageModule,
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }
