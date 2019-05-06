import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { GmailToolbarComponent } from './gmail-toolbar.component';

describe('GmailToolbarComponent', () => {
  let component: GmailToolbarComponent;
  let fixture: ComponentFixture<GmailToolbarComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ GmailToolbarComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(GmailToolbarComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
