import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { ActivatedRoute, Router } from '@angular/router';
import { RouterTestingModule } from '@angular/router/testing';
import { of } from 'rxjs';

import { ToastrModule } from 'ngx-toastr';

import { ListComponent } from '../list.component';
import { DragonService } from '../../../core/service/dragon.service';
import { ListComponentStub as stub } from './list.component.stub';

describe('ListComponent', () => {
  let component: ListComponent;
  let fixture: ComponentFixture<ListComponent>;
  let dragonService: DragonService;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ListComponent ],
      imports: [
        RouterTestingModule,
        ToastrModule.forRoot()
      ],
      providers: [
        { provide: DragonService, useClass: stub }
      ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    dragonService = TestBed.get(DragonService);
    spyOn(dragonService, 'getDragonsList').and.callFake(() => of(null));
    fixture = TestBed.createComponent(ListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
