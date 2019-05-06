import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { GmailNavbarComponent } from './gmail-navbar.component';

describe('GmailNavbarComponent', () => {
  let component: GmailNavbarComponent;
  let fixture: ComponentFixture<GmailNavbarComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ GmailNavbarComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(GmailNavbarComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
