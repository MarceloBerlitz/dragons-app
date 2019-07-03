import {Component, EventEmitter, Input, Output} from '@angular/core';
import {FormBuilder, FormGroup, Validators} from '@angular/forms';
import {DragonListModel} from '../../../core/model/dragon-list.model';

@Component({
  selector: 'app-form',
  templateUrl: './form.component.html',
  styleUrls: ['./form.component.css']
})
export class FormComponent {

  @Input()
  public dragon: DragonListModel;

  @Output()
  public dragonOut: EventEmitter<DragonListModel> = new EventEmitter<DragonListModel>();

  public form: FormGroup;

  constructor(
    private formBuilder: FormBuilder
  ) {
    this.form = this.formBuilder.group({
      name: this.formBuilder.control(this.dragon? this.dragon.name : '', Validators.required),
      type: this.formBuilder.control(this.dragon? this.dragon.type : '', Validators.required)
    })
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
}
