import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BabyPredictionComponent } from './baby-prediction.component';

describe('BabyPredictionComponent', () => {
  let component: BabyPredictionComponent;
  let fixture: ComponentFixture<BabyPredictionComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [BabyPredictionComponent]
    });
    fixture = TestBed.createComponent(BabyPredictionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
