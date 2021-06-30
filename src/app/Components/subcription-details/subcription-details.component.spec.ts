import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SubcriptionDetailsComponent } from './subcription-details.component';

describe('SubcriptionDetailsComponent', () => {
  let component: SubcriptionDetailsComponent;
  let fixture: ComponentFixture<SubcriptionDetailsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SubcriptionDetailsComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(SubcriptionDetailsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
