import { TestBed } from '@angular/core/testing';

import { DragonService } from './dragon.service';

describe('ListService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: DragonService = TestBed.get(DragonService);
    expect(service).toBeTruthy();
  });
});
