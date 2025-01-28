import { TestBed } from '@angular/core/testing';

import { NASAService } from './nasa.service';

describe('NASAService', () => {
  let service: NASAService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(NASAService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
