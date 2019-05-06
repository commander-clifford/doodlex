import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { GmailThemesComponent } from './gmail-themes.component';

describe('GmailThemesComponent', () => {
  let component: GmailThemesComponent;
  let fixture: ComponentFixture<GmailThemesComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ GmailThemesComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(GmailThemesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
