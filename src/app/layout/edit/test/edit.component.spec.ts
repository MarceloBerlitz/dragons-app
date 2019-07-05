import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { ActivatedRoute, Router } from '@angular/router';
import { ReactiveFormsModule } from '@angular/forms';
import { of } from 'rxjs';
import { NoopAnimationsModule } from '@angular/platform-browser/animations';

import { ToastrModule } from 'ngx-toastr';

import { EditComponent } from '../edit.component';
import { FormComponent } from '../../shared/form/form.component';
import { DragonService } from '../../../core/service/dragon.service';
import { EditComponentStub as stub } from './edit.component.stub';

describe('EditComponent', () => {
  let component: EditComponent;
  let fixture: ComponentFixture<EditComponent>;
  let activatedRoute: ActivatedRoute;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [
        EditComponent,
        FormComponent
      ],
      imports: [
        ReactiveFormsModule,
        NoopAnimationsModule,
        ToastrModule.forRoot()
      ],
      providers: [
        { provide: DragonService, use: {} },
        { provide: ActivatedRoute, useClass: stub },
        { provide: Router, use: {} }
      ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    activatedRoute = TestBed.get(ActivatedRoute);
    activatedRoute.params = of(null);
    fixture = TestBed.createComponent(EditComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
