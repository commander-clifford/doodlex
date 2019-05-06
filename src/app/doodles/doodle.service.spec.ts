import { TestBed, inject } from '@angular/core/testing';

import { DoodleService } from './doodle.service';

describe('DoodleService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [DoodleService]
    });
  });

  it('should be created', inject([DoodleService], (service: DoodleService) => {
    expect(service).toBeTruthy();
  }));
});
