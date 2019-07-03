import { Component, OnInit } from '@angular/core';
import {FormBuilder, FormGroup, Validators} from '@angular/forms';
import {LoginService} from './service/login.service';
import {Router} from '@angular/router';
import {AuthService} from '../core/auth/auth.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  public form: FormGroup;

  constructor(
    private formBuilder: FormBuilder,
    private loginService: LoginService,
    private authService: AuthService,
    private router: Router
  ) {
    this.form = this.formBuilder.group({
      username: this.formBuilder.control('', Validators.required),
      password: this.formBuilder.control('', Validators.required)
    });
  }

  ngOnInit() {
  }

  public loginHandler(): void {
    this.loginService.login(this.form.getRawValue())
      .subscribe(res => this.authService.setAuth(res),
        err => alert(err),
        () => { this.router.navigate(['dragons'])
          .then(() => {} ); });
  }
}
