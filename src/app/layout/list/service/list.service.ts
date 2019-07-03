import { Injectable } from '@angular/core';
import {DragonListModel} from '../model/dragon-list.model';
import {Observable} from 'rxjs';
import {ListRestService} from './list.rest-service';
import {map} from 'rxjs/operators';
import {DragonListModelMapper} from '../mapper/dragon-list-model.mapper';

@Injectable()
export class ListService {

  constructor(
    private restService: ListRestService
  ) { }

  public getDragonsList(): Observable<DragonListModel[]> {
    return this.restService.getDragonsList().pipe(
      map(res => DragonListModelMapper.mapFromList(res)),
      map(res => ListService.sortDragons(res))
    );
  }

  private static sortDragons(dragons: DragonListModel[]): DragonListModel[] {
    return dragons.sort((a, b) => {
      if (a.name < b.name) {
        return 1;
      }
      if (a.name > b.name) {
        return -1;
      }
      return 0;
    });
  }

}
