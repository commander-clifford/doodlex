import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SrpAbstractComponent } from './srp-abstract.component';

describe('SrpAbstractComponent', () => {
  let component: SrpAbstractComponent;
  let fixture: ComponentFixture<SrpAbstractComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SrpAbstractComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SrpAbstractComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
