import { Component, inject } from '@angular/core';
import { OmniTitle } from '@app/ui/omni-title/omni-title';
import { TutorialStep } from './components/tutorial-step/tutorial-step';
import { AppUsageSteps } from './services/app-usage-steps';
import { toSignal } from '@angular/core/rxjs-interop';

@Component({
  selector: 'app-how-it-works',
  imports: [OmniTitle, TutorialStep],
  templateUrl: './how-it-works.html'
})
export class HowItWorks {
  private readonly _appUsageSteps = inject(AppUsageSteps);

  protected readonly steps = toSignal(this._appUsageSteps.steps(), {
    initialValue: []
  });
}
