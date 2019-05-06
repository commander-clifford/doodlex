import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SrpLogoComponent } from './srp-logo.component';

describe('SrpLogoComponent', () => {
  let component: SrpLogoComponent;
  let fixture: ComponentFixture<SrpLogoComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SrpLogoComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SrpLogoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
