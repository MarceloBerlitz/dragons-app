import { Component, OnInit } from '@angular/core';
import {DragonListModel} from '../../core/model/dragon-list.model';
import {DragonService} from '../../core/service/dragon.service';

@Component({
  selector: 'app-create',
  templateUrl: './create.component.html',
  styleUrls: ['./create.component.css']
})
export class CreateComponent implements OnInit {

  constructor(
    private dragonService: DragonService
  ) { }

  ngOnInit() {
  }

  createDragon(dragon: DragonListModel): void {
    this.dragonService.createDragon(dragon).subscribe(() => {
      alert('Dragão cadastrado com sucesso.');
    }, err => {
      alert(`Erro ao cadastrar Dragão: ${err}`);
    })
  }
}
