import { TestBed } from '@angular/core/testing';

import { CatRestrictionService } from './cat-restriction.service';

describe('CatRestrictionService', () => {
  let service: CatRestrictionService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(CatRestrictionService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
