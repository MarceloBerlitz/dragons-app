import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {LayoutComponent} from './layout.component';
import {ListComponent} from './list/list.component';
import {CreateComponent} from './create/create.component';

const routes: Routes = [
  { path: '', component: LayoutComponent,
    children: [
      { path: 'list', component: ListComponent },
      { path: 'create', component: CreateComponent },
      { path: '**', redirectTo: 'list' }
    ]},
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class LayoutRoutingModule { }
