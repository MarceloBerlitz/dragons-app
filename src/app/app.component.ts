import { Component } from '@angular/core';
import { Router} from '@angular/router';
import {StorageEnum} from './shared/enum/storage.enum';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'dragons-app';

  constructor(
    private router: Router
  ) {}

  public logout(): void {
    this.router.navigate(['login']).then(() => {
      localStorage.setItem(StorageEnum.TOKEN, '');
    });
  }
}
