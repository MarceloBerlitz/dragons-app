import { Component } from '@angular/core';

import { DragonModel } from '../../core/model/dragon.model';
import { DragonService } from '../../core/service/dragon.service';

@Component({
  selector: 'app-create',
  templateUrl: './create.component.html',
  styleUrls: ['./create.component.css']
})
export class CreateComponent {

  constructor(
    private dragonService: DragonService
  ) { }

  createDragon(dragon: DragonModel): void {
    this.dragonService.createDragon(dragon).subscribe(() => {
      alert('Dragão cadastrado com sucesso.');
    }, err => {
      alert(`Erro ao cadastrar Dragão: ${JSON.stringify(err)}`);
    })
  }
}
