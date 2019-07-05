import { Component, OnInit } from '@angular/core';

import { ToastrService } from 'ngx-toastr';

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
    private service: DragonService,
    private toaster: ToastrService
  ) { }

  ngOnInit() {
    this.updateDragonsList();
  }

  private updateDragonsList(): void {
    this.service.getDragonsList()
      .subscribe(res => {
        this.dragonsList = res;
      }, err => {
        this.toaster.error(err);
      });
  }

  public deleteDragon(id: string): void {
    if (confirm('Tem certeza que deseja excluir este Dragão?')) {
      this.service.deleteDragon(id)
        .subscribe(() => {
          this.toaster.success('Dragão excluído.');
          this.updateDragonsList();
        }, err => {
          this.toaster.error(JSON.stringify(err));
        });
    }
  }
}
