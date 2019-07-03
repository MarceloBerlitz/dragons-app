import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';

import { DragonModel } from '../model/dragon.model';
import { DragonModelMapper } from '../mapper/dragon-model.mapper';
import { DragonRestService } from './dragon.rest-service';
import { DragonCreationRequestMapper } from '../mapper/dragon-creation-request.mapper';
import { DragonEditionRequestMapper } from '../mapper/dragon-edition-request.mapper';

@Injectable()
export class DragonService {

  constructor(
    private restService: DragonRestService
  ) { }

  public getDragonsList(): Observable<DragonModel[]> {
    return this.restService.getDragonsList().pipe(
      map(res => DragonModelMapper.mapFromList(res)),
      map(res => DragonService.sortDragons(res))
    );
  }

  public getDragon(id: string): Observable<DragonModel> {
    return this.restService.getDragon(id).pipe(
      map(res => DragonModelMapper.mapFrom(res))
    )
  }

  public createDragon(dragon: DragonModel): Observable<void> {
    return this.restService.createDragon(
      DragonCreationRequestMapper.mapFrom(dragon)
    );
  }

  public deleteDragon(id: string): Observable<void> {
    return this.restService.deleteDragon(id);
  }

  private static sortDragons(dragons: DragonModel[]): DragonModel[] {
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

  public editDragon(dragon: DragonModel): Observable<void> {
    return this.restService.editDragon(DragonEditionRequestMapper.mapFrom(dragon), dragon.id);
  }
}
