import { TestBed } from '@angular/core/testing';

import { APIproductsService } from './apiproducts.service';

describe('APIproductsService', () => {
  let service: APIproductsService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(APIproductsService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
