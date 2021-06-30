import { ComponentFixture, TestBed } from '@angular/core/testing';

import { OtherSubscriptionsComponent } from './other-subscriptions.component';

describe('OtherSubscriptionsComponent', () => {
  let component: OtherSubscriptionsComponent;
  let fixture: ComponentFixture<OtherSubscriptionsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ OtherSubscriptionsComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(OtherSubscriptionsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
