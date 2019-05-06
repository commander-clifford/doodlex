import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SrpFunboxComponent } from './srp-funbox.component';

describe('SrpFunboxComponent', () => {
  let component: SrpFunboxComponent;
  let fixture: ComponentFixture<SrpFunboxComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SrpFunboxComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SrpFunboxComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
