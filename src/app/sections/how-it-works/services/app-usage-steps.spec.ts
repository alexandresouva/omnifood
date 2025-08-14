import { TestBed } from '@angular/core/testing';

import { AppUsageSteps } from './app-usage-steps';

describe('AppUsageSteps', () => {
  let service: AppUsageSteps;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(AppUsageSteps);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
