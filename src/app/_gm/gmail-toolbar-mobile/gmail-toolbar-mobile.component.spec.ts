import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { GmailToolbarMobileComponent } from './gmail-toolbar-mobile.component';

describe('GmailToolbarMobileComponent', () => {
  let component: GmailToolbarMobileComponent;
  let fixture: ComponentFixture<GmailToolbarMobileComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ GmailToolbarMobileComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(GmailToolbarMobileComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
