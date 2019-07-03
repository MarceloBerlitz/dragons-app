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
      map(res => DragonListModelMapper.mapFromList(res))
    );
  }

}
