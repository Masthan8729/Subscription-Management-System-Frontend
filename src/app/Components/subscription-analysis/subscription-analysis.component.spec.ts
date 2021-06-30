import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SubscriptionAnalysisComponent } from './subscription-analysis.component';

describe('SubscriptionAnalysisComponent', () => {
  let component: SubscriptionAnalysisComponent;
  let fixture: ComponentFixture<SubscriptionAnalysisComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SubscriptionAnalysisComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(SubscriptionAnalysisComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
