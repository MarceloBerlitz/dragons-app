import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { CreateComponent } from './create.component';
import { CoreModule } from '../../core/core.module';
import { SharedModule } from '../shared/shared.module';
import {ToastrModule} from 'ngx-toastr';

@NgModule({
  declarations: [
    CreateComponent
  ],
  imports: [
    CommonModule,
    CoreModule,
    SharedModule,
    ToastrModule
  ]
})
export class CreateModule { }
