import { TestBed } from '@angular/core/testing';

import { GetRequestService } from './get-request.service';

describe('GetRequestService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: GetRequestService = TestBed.get(GetRequestService);
    expect(service).toBeTruthy();
  });
});
