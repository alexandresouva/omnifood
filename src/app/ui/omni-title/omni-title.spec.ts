import { ComponentFixture, TestBed } from '@angular/core/testing';

import { OmniTitle } from './omni-title';

describe('OmniTitle', () => {
  let component: OmniTitle;
  let fixture: ComponentFixture<OmniTitle>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [OmniTitle]
    }).compileComponents();

    fixture = TestBed.createComponent(OmniTitle);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
