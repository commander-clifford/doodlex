import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SrpTopStoriesComponent } from './srp-top-stories.component';

describe('SrpTopStoriesComponent', () => {
  let component: SrpTopStoriesComponent;
  let fixture: ComponentFixture<SrpTopStoriesComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SrpTopStoriesComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SrpTopStoriesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
