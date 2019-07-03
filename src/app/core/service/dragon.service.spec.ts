import { TestBed } from '@angular/core/testing';

import { DragonService } from './dragon.service';
import { DragonRestService } from './dragon.rest-service';

describe('DragonService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [
        DragonService,
        { provide: DragonRestService, use: {} }
      ]
    })
  });

  it('should be created', () => {
    const service: DragonService = TestBed.get(DragonService);
    expect(service).toBeTruthy();
  });
});
