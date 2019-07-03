import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { EditComponent } from './edit.component';
import { CoreModule } from '../../core/core.module';
import { SharedModule } from '../shared/shared.module';

@NgModule({
  declarations: [
    EditComponent
  ],
  imports: [
    CommonModule,
    CoreModule,
    SharedModule
  ]
})
export class EditModule { }
