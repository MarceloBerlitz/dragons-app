import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';

import { ToastrService } from 'ngx-toastr';

import { LoginService } from './service/login.service';
import { AuthService } from '../core/auth/auth.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent {

  public form: FormGroup;

  constructor(
    private formBuilder: FormBuilder,
    private loginService: LoginService,
    private authService: AuthService,
    private router: Router,
    private toaster: ToastrService
  ) {
    this.form = this.formBuilder.group({
      username: this.formBuilder.control('', Validators.required),
      password: this.formBuilder.control('', Validators.required)
    });
  }

  public loginHandler(): void {
    this.loginService.login(this.form.getRawValue())
      .subscribe(res => this.authService.setAuth(res),
        err => this.toaster.error(err),
        () => { this.router.navigate(['dragons'])
          .then(() => {} ); });
  }
}
