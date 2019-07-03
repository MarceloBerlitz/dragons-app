import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { map, switchMap } from 'rxjs/operators';

import { DragonListModel } from '../../core/model/dragon-list.model';
import { DragonService } from '../../core/service/dragon.service';

@Component({
  selector: 'app-edit',
  templateUrl: './edit.component.html',
  styleUrls: ['./edit.component.css']
})
export class EditComponent implements OnInit {

  public dragon: DragonListModel;

  constructor(
    private dragonService: DragonService,
    private activatedRoute: ActivatedRoute
  ) { }

  ngOnInit() {
    this.activatedRoute.params.pipe(
      map(param => param['id']),
      switchMap(id => this.dragonService.getDragon(id))
    ).subscribe(res => {
      this.dragon = res;
    }, err => {
      alert(`Erro ao carregar Dragão: ${JSON.stringify(err)}`);
    })
  }

  public editDragon(dragon: DragonListModel) {
    this.dragonService.editDragon(dragon)
      .subscribe(() => {
        alert('Dragão editado com sucesso.')
      }, err => {
        alert(`Erro ao carregar Dragão: ${JSON.stringify(err)}`);
      });
  }
}
