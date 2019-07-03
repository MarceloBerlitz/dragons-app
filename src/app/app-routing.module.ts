import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import {LoginComponent} from './login/login.component';
import {AuthGuard} from './auth.guard';
import {LayoutComponent} from './layout/layout.component';

const routes: Routes = [
  { path: 'login', component: LoginComponent },
  { path: 'dragons',
    component: LayoutComponent,
    canActivate: [ AuthGuard ]},
  { path: '**', redirectTo: '/login' }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
