import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SrpSearchSuggestionsComponent } from './srp-search-suggestions.component';

describe('SrpSearchSuggestionsComponent', () => {
  let component: SrpSearchSuggestionsComponent;
  let fixture: ComponentFixture<SrpSearchSuggestionsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SrpSearchSuggestionsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SrpSearchSuggestionsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
