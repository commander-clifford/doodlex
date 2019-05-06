import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { GmailSnackbarComponent } from './gmail-snackbar.component';

describe('GmailSnackbarComponent', () => {
  let component: GmailSnackbarComponent;
  let fixture: ComponentFixture<GmailSnackbarComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ GmailSnackbarComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(GmailSnackbarComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
