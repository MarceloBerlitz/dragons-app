import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';

import { LoginRequest } from '../integration/login.request';
import { LoginRestService } from './login.rest-service';

@Injectable()
export class LoginService {

  constructor(
    private restService: LoginRestService
  ) { }

  public login(request: LoginRequest): Observable<string> {
    return this.restService.login(request)
      .pipe(map(res => res.token));
  }

}
