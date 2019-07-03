import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';

import { environment } from '../../../environments/environment';

import { DragonResponse } from '../integration/dragon.response';
import { DragonCreationRequest } from '../integration/dragon-creation.request';
import { DragonEditionRequest } from '../integration/dragon-edition.request';

@Injectable()
export class DragonRestService {

  constructor(
    private http: HttpClient
  ) { }

  public getDragonsList(): Observable<DragonResponse[]> {
    return this.http.get<DragonResponse[]>(environment.dragonApi);
  }

  public createDragon(dragonCreationRequest: DragonCreationRequest): Observable<void> {
    return this.http.post<void>(environment.dragonApi, dragonCreationRequest);
  }

  public deleteDragon(id: string): Observable<void> {
    return this.http.delete<void>(`${environment.dragonApi}/${id}`);
  }

  public getDragon(id: string): Observable<DragonResponse> {
    return this.http.get<DragonResponse>(`${environment.dragonApi}/${id}`);
  }

  public editDragon(dragonEditionRequest: DragonEditionRequest, id: string) {
    return this.http.put<void>(`${environment.dragonApi}/${id}`, dragonEditionRequest);
  }
}
