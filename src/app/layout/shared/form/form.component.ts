import { Component, EventEmitter, Input, OnChanges, Output, SimpleChanges } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

import * as moment from 'moment';

import { DragonListModel } from '../../../core/model/dragon-list.model';

@Component({
  selector: 'app-form',
  templateUrl: './form.component.html',
  styleUrls: ['./form.component.css']
})
export class FormComponent implements OnChanges {

  @Input()
  public dragon: DragonListModel;

  @Output()
  public dragonOut: EventEmitter<DragonListModel> = new EventEmitter<DragonListModel>();

  public form: FormGroup;

  constructor(
    private formBuilder: FormBuilder
  ) {
    this.form = this.formBuilder.group({
      name: this.formBuilder.control('', Validators.required),
      type: this.formBuilder.control('', Validators.required)
    })
  }

  ngOnChanges(changes: SimpleChanges): void {
    if(changes.dragon.currentValue) {
      this.form.controls['name'].setValue(this.dragon.name);
      this.form.controls['type'].setValue(this.dragon.type);
    }
  }

  public submitDragon(): void {
    if (this.form.valid) {

      if(!this.dragon) {
        this.dragon = new DragonListModel(
          this.form.controls['name'].value,
          this.form.controls['type'].value
        );
      } else {
        this.dragon.name = this.form.controls['name'].value;
        this.dragon.type = this.form.controls['type'].value;
      }

      this.dragonOut.emit(this.dragon);
    }
  }

  public getCreatedAt(): string {
    return this.dragon && this.dragon.createdAt || moment().format('DD/MM/YYYY');
  }
}
