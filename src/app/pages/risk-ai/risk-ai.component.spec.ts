import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RiskAiComponent } from './risk-ai.component';

describe('RiskAiComponent', () => {
  let component: RiskAiComponent;
  let fixture: ComponentFixture<RiskAiComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [RiskAiComponent]
    });
    fixture = TestBed.createComponent(RiskAiComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
