import { Component, OnInit } from '@angular/core';
import {DragonListModel} from '../../core/model/dragon-list.model';
import {DragonService} from '../../core/service/dragon.service';

@Component({
  selector: 'app-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.css']
})
export class ListComponent implements OnInit {

  public dragonsList: DragonListModel[];

  constructor(
    private service: DragonService
  ) { }

  ngOnInit() {
    this.service.getDragonsList()
      .subscribe(res => {
        this.dragonsList = res;
      });
  }

}
