import { ComponentFixture, TestBed } from '@angular/core/testing';

import { OmniButton } from './omni-button';

describe('OmniButton', () => {
  let component: OmniButton;
  let fixture: ComponentFixture<OmniButton>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [OmniButton]
    }).compileComponents();

    fixture = TestBed.createComponent(OmniButton);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
