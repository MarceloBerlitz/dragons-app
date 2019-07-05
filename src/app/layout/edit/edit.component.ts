import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { map, switchMap } from 'rxjs/operators';

import { ToastrService } from 'ngx-toastr';

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
    private activatedRoute: ActivatedRoute,
    private router: Router,
    private toaster: ToastrService
  ) { }

  ngOnInit() {
    this.activatedRoute.params.pipe(
      map(param => param['id']),
      switchMap(id => this.dragonService.getDragon(id))
    ).subscribe(res => {
      this.dragon = res;
    }, err => {
      this.toaster.error(JSON.stringify(err));
    })
  }

  public editDragon(dragon: DragonModel) {
    this.dragonService.editDragon(dragon)
      .subscribe(() => {
        this.toaster.success('Dragão editado.')
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
