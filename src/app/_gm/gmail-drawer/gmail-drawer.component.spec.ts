import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { GmailDrawerComponent } from './gmail-drawer.component';

describe('GmailDrawerComponent', () => {
  let component: GmailDrawerComponent;
  let fixture: ComponentFixture<GmailDrawerComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ GmailDrawerComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(GmailDrawerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
