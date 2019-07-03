import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {ListComponent} from './list.component';
import {HttpClientModule} from '@angular/common/http';

@NgModule({
  declarations: [
    ListComponent
  ],
  imports: [
    CommonModule,
    HttpClientModule
  ],
  providers: [
  ]
})
export class ListModule { }
