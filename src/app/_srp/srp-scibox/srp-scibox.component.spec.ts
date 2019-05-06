import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SrpSciboxComponent } from './srp-scibox.component';

describe('SrpSciboxComponent', () => {
  let component: SrpSciboxComponent;
  let fixture: ComponentFixture<SrpSciboxComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SrpSciboxComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SrpSciboxComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
