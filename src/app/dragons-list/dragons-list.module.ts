import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {DragonsListComponent} from './dragons-list.component';
import {HeaderComponent} from '../header/header.component';

@NgModule({
  declarations: [
    DragonsListComponent,
    HeaderComponent
  ],
  imports: [
    CommonModule
  ]
})
export class DragonsListModule { }
