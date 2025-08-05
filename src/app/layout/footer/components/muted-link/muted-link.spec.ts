import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MutedLink } from './muted-link';

describe('MutedLink', () => {
  let component: MutedLink;
  let fixture: ComponentFixture<MutedLink>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [MutedLink]
    }).compileComponents();

    fixture = TestBed.createComponent(MutedLink);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
