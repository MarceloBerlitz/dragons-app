import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {LoginComponent} from './login/login.component';
import {DragonsListComponent} from './dragons-list/dragons-list.component';
import {AuthGuard} from './auth.guard';

const routes: Routes = [
  { path: 'login', component: LoginComponent },
  { path: 'dragons-list',
    component: DragonsListComponent,
    canActivate: [ AuthGuard ]},
  { path: '**', redirectTo: '/login' }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
