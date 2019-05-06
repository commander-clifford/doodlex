import { TestBed, inject } from '@angular/core/testing';

import { DoodleSheetService } from './doodle-sheet.service';

describe('DoodleSheetService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [DoodleSheetService]
    });
  });

  it('should be created', inject([DoodleSheetService], (service: DoodleSheetService) => {
    expect(service).toBeTruthy();
  }));
});
