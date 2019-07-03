import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {HeaderComponent} from './header/header.component';
import {LayoutComponent} from './layout.component';
import {ListModule} from './list/list.module';
import {LayoutRoutingModule} from './layout-routing.module';
import {ReactiveFormsModule} from '@angular/forms';
import {CreateModule} from './create/create.module';

@NgModule({
  declarations: [
    LayoutComponent,
    HeaderComponent
  ],
  imports: [
    CommonModule,
    ListModule,
    CreateModule,
    LayoutRoutingModule,
    ReactiveFormsModule
  ],
})
export class LayoutModule { }
