import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { DragonRestService } from './service/dragon.rest-service';
import { DragonService } from './service/dragon.service';

@NgModule({
  declarations: [],
  imports: [
    CommonModule
  ],
  providers: [
    DragonService,
    DragonRestService
  ]
})
export class CoreModule { }
