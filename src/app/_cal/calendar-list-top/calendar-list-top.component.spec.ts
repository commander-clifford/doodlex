import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CalendarListTopComponent } from './calendar-list-top.component';

describe('CalendarListTopComponent', () => {
  let component: CalendarListTopComponent;
  let fixture: ComponentFixture<CalendarListTopComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CalendarListTopComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CalendarListTopComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
