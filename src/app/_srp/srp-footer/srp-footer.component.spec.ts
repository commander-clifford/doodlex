import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SrpFooterComponent } from './srp-footer.component';

describe('SrpFooterComponent', () => {
  let component: SrpFooterComponent;
  let fixture: ComponentFixture<SrpFooterComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SrpFooterComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SrpFooterComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
