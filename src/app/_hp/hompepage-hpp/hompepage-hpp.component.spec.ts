import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { HompepageHppComponent } from './hompepage-hpp.component';

describe('HompepageHppComponent', () => {
  let component: HompepageHppComponent;
  let fixture: ComponentFixture<HompepageHppComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ HompepageHppComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(HompepageHppComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
