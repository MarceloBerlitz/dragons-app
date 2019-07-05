import { Component } from '@angular/core';
import { Router } from '@angular/router';

import { ToastrService } from 'ngx-toastr';

import { DragonModel } from '../../core/model/dragon.model';
import { DragonService } from '../../core/service/dragon.service';

@Component({
  selector: 'app-create',
  templateUrl: './create.component.html',
  styleUrls: ['./create.component.css']
})
export class CreateComponent {

  constructor(
    private dragonService: DragonService,
    private toaster: ToastrService,
    private router: Router
  ) { }

  public createDragon(dragon: DragonModel): void {
    this.dragonService.createDragon(dragon).subscribe(() => {
      this.toaster.success('Dragão cadastrado.');
    }, err => {
      this.toaster.error(JSON.stringify(err));
    }, () => {
      this.router.navigate(['dragons/list']).then(() => {});
    });
  }

  public cancelar(): void {
    this.router.navigate(['dragons/list']).then(() => {});
  }
}
