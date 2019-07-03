import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { map, switchMap } from 'rxjs/operators';

import { DragonModel } from '../../core/model/dragon.model';
import { DragonService } from '../../core/service/dragon.service';

@Component({
  selector: 'app-edit',
  templateUrl: './edit.component.html',
  styleUrls: ['./edit.component.css']
})
export class EditComponent implements OnInit {

  public dragon: DragonModel;

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

  public editDragon(dragon: DragonModel) {
    this.dragonService.editDragon(dragon)
      .subscribe(() => {
        alert('Dragão editado com sucesso.')
      }, err => {
        alert(`Erro ao carregar Dragão: ${JSON.stringify(err)}`);
      });
  }
}
