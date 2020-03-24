import { TestBed } from '@angular/core/testing';

import { GetnotesService } from './getnotes.service';

describe('GetnotesService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: GetnotesService = TestBed.get(GetnotesService);
    expect(service).toBeTruthy();
  });
});
