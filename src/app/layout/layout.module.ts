import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ReactiveFormsModule } from '@angular/forms';

import { HeaderComponent } from './header/header.component';
import { LayoutComponent } from './layout.component';
import { ListModule } from './list/list.module';
import { LayoutRoutingModule } from './layout-routing.module';
import { CreateModule } from './create/create.module';
import { EditModule } from './edit/edit.module';

@NgModule({
  declarations: [
    LayoutComponent,
    HeaderComponent
  ],
  imports: [
    CommonModule,
    ListModule,
    CreateModule,
    EditModule,
    LayoutRoutingModule,
    ReactiveFormsModule
  ],
})
export class LayoutModule { }
