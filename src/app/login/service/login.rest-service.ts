import { Injectable } from '@angular/core';
import { Observable, of, throwError } from 'rxjs';

import { LoginResponse } from '../integration/login.response';
import { LoginRequest } from '../integration/login.request';

@Injectable()
export class LoginRestService {

  constructor() { }

  public login(request: LoginRequest): Observable<LoginResponse> {
    if (request.username === 'user' && request.password === 'teste123') {
      return of(new LoginResponse('token123'));
    }
    return throwError('Usuario ou senha incorretos');
  }

}
