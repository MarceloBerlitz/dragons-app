import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {ListComponent} from './list.component';
import {ListService} from './service/list.service';
import {ListRestService} from './service/list.rest-service';
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
    ListService,
    ListRestService
  ]
})
export class ListModule { }
