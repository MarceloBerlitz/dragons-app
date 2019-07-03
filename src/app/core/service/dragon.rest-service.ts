import { Injectable } from '@angular/core';
import {Observable} from 'rxjs';
import {HttpClient} from '@angular/common/http';
import {environment} from '../../../environments/environment';
import {DragonListResponse} from '../integration/dragon-list.response';
import {DragonCreationRequest} from '../integration/dragon-creation.request';

@Injectable()
export class DragonRestService {

  constructor(
    private http: HttpClient
  ) { }

  public getDragonsList(): Observable<DragonListResponse[]> {
    return this.http.get<DragonListResponse[]>(environment.dragonApi);
  }

  createDragon(dragonCreationRequest: DragonCreationRequest): Observable<void> {
    return this.http.post<void>(environment.dragonApi, dragonCreationRequest);
  }
}
