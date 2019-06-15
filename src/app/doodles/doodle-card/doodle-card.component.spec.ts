import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DoodleCardComponent } from './doodle-card.component';

describe('DoodleCardComponent', () => {
  let component: DoodleCardComponent;
  let fixture: ComponentFixture<DoodleCardComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DoodleCardComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DoodleCardComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
