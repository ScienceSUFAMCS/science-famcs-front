import { TestBed } from '@angular/core/testing';

import { AdditionalClassesService } from './additional-classes.service';

describe('AdditionalClassesService', () => {
  let service: AdditionalClassesService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(AdditionalClassesService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
