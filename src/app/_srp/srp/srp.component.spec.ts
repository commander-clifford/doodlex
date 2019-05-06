import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SrpComponent } from './srp.component';

describe('SrpComponent', () => {
  let component: SrpComponent;
  let fixture: ComponentFixture<SrpComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SrpComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SrpComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
