import { Injectable } from '@angular/core';
import {DragonListModel} from '../model/dragon-list.model';
import {Observable} from 'rxjs';
import {map} from 'rxjs/operators';
import {DragonListModelMapper} from '../mapper/dragon-list-model.mapper';
import {DragonRestService} from './dragon.rest-service';
import {DragonCreationRequestMapper} from '../mapper/dragon-creation-request.mapper';

@Injectable()
export class DragonService {

  constructor(
    private restService: DragonRestService
  ) { }

  public getDragonsList(): Observable<DragonListModel[]> {
    return this.restService.getDragonsList().pipe(
      map(res => DragonListModelMapper.mapFromList(res)),
      map(res => DragonService.sortDragons(res))
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

  public createDragon(dragon: DragonListModel): Observable<void> {
    return this.restService.createDragon(
      DragonCreationRequestMapper.mapFrom(dragon)
    );
  }
}
