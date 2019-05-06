import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SrpResultsListComponent } from './srp-results-list.component';

describe('SrpResultsListComponent', () => {
  let component: SrpResultsListComponent;
  let fixture: ComponentFixture<SrpResultsListComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SrpResultsListComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SrpResultsListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
