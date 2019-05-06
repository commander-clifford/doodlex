import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { HomepageLogoComponent } from './homepage-logo.component';

describe('HomepageLogoComponent', () => {
  let component: HomepageLogoComponent;
  let fixture: ComponentFixture<HomepageLogoComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ HomepageLogoComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(HomepageLogoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
