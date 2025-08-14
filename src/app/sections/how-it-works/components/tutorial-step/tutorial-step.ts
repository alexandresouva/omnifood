import { Component, input } from '@angular/core';
import { HowItWorksStep } from '../../models/how-it-works-step';
import { OmniTitle } from '@app/ui/omni-title/omni-title';

@Component({
  selector: 'app-screen-step',
  imports: [OmniTitle],
  templateUrl: './tutorial-step.html'
})
export class TutorialStep {
  step = input.required<HowItWorksStep>();
  imagePosition = input<'left' | 'right'>('left');
}
