import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DoodleSheetComponent } from './doodle-sheet.component';

describe('DoodleSheetComponent', () => {
  let component: DoodleSheetComponent;
  let fixture: ComponentFixture<DoodleSheetComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DoodleSheetComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DoodleSheetComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
