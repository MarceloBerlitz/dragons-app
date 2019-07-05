import { TestBed } from '@angular/core/testing';

import { LoginService } from './login.service';
import { LoginRestService } from './login.rest-service';

describe('LoginService', () => {
  beforeEach(() => TestBed.configureTestingModule({
    providers: [
      LoginService,
      { provide: LoginRestService, use: {} }
    ]
  }));

  it('should be created', () => {
    const service: LoginService = TestBed.get(LoginService);
    expect(service).toBeTruthy();
  });
});
