import { Injectable } from '@angular/core';
import {Observable} from 'rxjs';
import {HttpClient} from '@angular/common/http';
import {environment} from '../../../../environments/environment';
import {DragonListResponse} from '../integration/dragon-list.response';

@Injectable()
export class ListRestService {

  constructor(
    private http: HttpClient
  ) { }

  public getDragonsList(): Observable<DragonListResponse[]> {
    return this.http.get<DragonListResponse[]>(environment.dragonApi);
  }

}
