import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

import { StorageEnum } from '../shared/enum/storage.enum';

@Component({
  selector: 'app-dragons-list',
  templateUrl: './layout.component.html',
  styleUrls: ['./layout.component.css']
})
export class LayoutComponent implements OnInit {

  constructor(
    private router: Router
  ) {}

  ngOnInit() {
  }

  public logout(): void {
    this.router.navigate(['login']).then(() => {
      localStorage.setItem(StorageEnum.TOKEN, '');
    });
  }

}
