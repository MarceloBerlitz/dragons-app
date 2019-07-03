import { Component, OnInit } from '@angular/core';
import {ListService} from './service/list.service';
import {DragonListModel} from './model/dragon-list.model';

@Component({
  selector: 'app-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.css']
})
export class ListComponent implements OnInit {

  public dragonsList: DragonListModel[];

  constructor(
    private service: ListService
  ) { }

  ngOnInit() {
    this.service.getDragonsList()
      .subscribe(res => {
        this.dragonsList = res;
      });
  }

}
