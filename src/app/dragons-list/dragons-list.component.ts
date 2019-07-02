import { Component, OnInit } from '@angular/core';
import {StorageEnum} from '../shared/enum/storage.enum';
import {Router} from '@angular/router';

@Component({
  selector: 'app-dragons-list',
  templateUrl: './dragons-list.component.html',
  styleUrls: ['./dragons-list.component.css']
})
export class DragonsListComponent implements OnInit {

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
