import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TutorialStep } from './tutorial-step';

describe('ScreenStep', () => {
  let component: TutorialStep;
  let fixture: ComponentFixture<TutorialStep>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [TutorialStep]
    }).compileComponents();

    fixture = TestBed.createComponent(TutorialStep);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
