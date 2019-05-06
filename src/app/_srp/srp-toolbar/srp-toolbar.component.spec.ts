import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SrpToolbarComponent } from './srp-toolbar.component';

describe('SrpToolbarComponent', () => {
  let component: SrpToolbarComponent;
  let fixture: ComponentFixture<SrpToolbarComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SrpToolbarComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SrpToolbarComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
