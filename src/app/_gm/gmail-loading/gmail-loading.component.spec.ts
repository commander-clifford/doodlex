import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { GmailLoadingComponent } from './gmail-loading.component';

describe('GmailLoadingComponent', () => {
  let component: GmailLoadingComponent;
  let fixture: ComponentFixture<GmailLoadingComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ GmailLoadingComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(GmailLoadingComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
