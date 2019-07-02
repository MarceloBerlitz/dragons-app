import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { LoginComponent } from './login.component';
import {MzInputModule} from 'ngx-materialize';

@NgModule({
  declarations: [
    LoginComponent
  ],
  imports: [
    CommonModule,
    MzInputModule
  ]
})
export class LoginModule { }
