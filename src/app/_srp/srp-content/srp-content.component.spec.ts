import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SrpContentComponent } from './srp-content.component';

describe('SrpContentComponent', () => {
  let component: SrpContentComponent;
  let fixture: ComponentFixture<SrpContentComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SrpContentComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SrpContentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
