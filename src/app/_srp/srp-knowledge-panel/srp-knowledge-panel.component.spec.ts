import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SrpKnowledgePanelComponent } from './srp-knowledge-panel.component';

describe('SrpKnowledgePanelComponent', () => {
  let component: SrpKnowledgePanelComponent;
  let fixture: ComponentFixture<SrpKnowledgePanelComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SrpKnowledgePanelComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SrpKnowledgePanelComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
