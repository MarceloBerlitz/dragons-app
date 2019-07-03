import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';

import { DragonListModel } from '../model/dragon-list.model';
import { DragonListModelMapper } from '../mapper/dragon-list-model.mapper';
import { DragonRestService } from './dragon.rest-service';
import { DragonCreationRequestMapper } from '../mapper/dragon-creation-request.mapper';
import { DragonEditionRequestMapper } from '../mapper/dragon-edition-request.mapper';

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

  public getDragon(id: string): Observable<DragonListModel> {
    return this.restService.getDragon(id).pipe(
      map(res => DragonListModelMapper.mapFrom(res))
    )
  }

  public createDragon(dragon: DragonListModel): Observable<void> {
    return this.restService.createDragon(
      DragonCreationRequestMapper.mapFrom(dragon)
    );
  }

  public deleteDragon(id: string): Observable<void> {
    return this.restService.deleteDragon(id);
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

  public editDragon(dragon: DragonListModel): Observable<void> {
    return this.restService.editDragon(DragonEditionRequestMapper.mapFrom(dragon), dragon.id);
  }
}
