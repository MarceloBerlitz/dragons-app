import {Injectable} from '@angular/core';
import {StorageEnum} from '../../shared/enum/storage.enum';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  constructor() { }

  public isAuth(): boolean {
    return !!localStorage.getItem(StorageEnum.TOKEN);
  }

  public setAuth(token: string): void {
    localStorage.setItem(StorageEnum.TOKEN, token);
  }

}
