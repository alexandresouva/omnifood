import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MealTag } from './meal-tag';

describe('MealTag', () => {
  let component: MealTag;
  let fixture: ComponentFixture<MealTag>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [MealTag]
    }).compileComponents();

    fixture = TestBed.createComponent(MealTag);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
