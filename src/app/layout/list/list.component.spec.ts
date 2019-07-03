import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { ActivatedRoute, Router } from '@angular/router';
import { RouterTestingModule } from '@angular/router/testing';

import { ListComponent } from './list.component';
import { DragonService } from '../../core/service/dragon.service';

describe('ListComponent', () => {
  let component: ListComponent;
  let fixture: ComponentFixture<ListComponent>;
  let dragonService: DragonService;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ListComponent ],
      imports: [ RouterTestingModule ],
      providers: [
        { provide: DragonService, use: {} },
        { provide: Router, use: {} },
        { provide: ActivatedRoute, use: {} }
      ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    dragonService = TestBed.get(DragonService);
    fixture = TestBed.createComponent(ListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
