import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { HomepageCategoriesComponent } from './homepage-categories.component';

describe('HomepageCategoriesComponent', () => {
  let component: HomepageCategoriesComponent;
  let fixture: ComponentFixture<HomepageCategoriesComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ HomepageCategoriesComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(HomepageCategoriesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
