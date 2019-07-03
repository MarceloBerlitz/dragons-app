import { Component, OnInit } from '@angular/core';

import { DragonModel } from '../../core/model/dragon.model';
import { DragonService } from '../../core/service/dragon.service';

@Component({
  selector: 'app-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.css']
})
export class ListComponent implements OnInit {

  public dragonsList: DragonModel[];

  constructor(
    private service: DragonService
  ) { }

  ngOnInit() {
    this.updateDragonsList();
  }

  private updateDragonsList(): void {
    this.service.getDragonsList()
      .subscribe(res => {
        this.dragonsList = res;
      });
  }

  public deleteDragon(id: string): void {
    this.service.deleteDragon(id)
      .subscribe(() => {
        alert('Dragão excluído.');
        this.updateDragonsList();
      }, err => {
        alert(`Erro ao excluir dragão: ${JSON.stringify(err)}`);
      });
  }
}
