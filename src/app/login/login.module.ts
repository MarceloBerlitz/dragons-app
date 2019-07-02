import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { LoginComponent } from './login.component';
import {LoginService} from './service/login.service';
import {ReactiveFormsModule} from '@angular/forms';
import {LoginRestService} from './service/login.rest-service';

@NgModule({
  declarations: [
    LoginComponent
  ],
  imports: [
    CommonModule,
    ReactiveFormsModule
  ],
  providers: [
    LoginService,
    LoginRestService
  ]
})
export class LoginModule { }
