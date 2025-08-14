import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
import { HowItWorksStep } from '../models/how-it-works-step';

@Injectable({
  providedIn: 'root'
})
export class AppUsageSteps {
  steps(): Observable<HowItWorksStep[]> {
    return of([
      {
        step: 1,
        title: 'Tell us what you like (and what not)',
        description:
          'Never again waste time thinking about what to eat! Omnifood AI will create a 100% personalized weekly meal plan just for you. It makes sure you get all the nutrients and vitamins you need, no matter what diet you follow!',
        imageUrl: 'images/screens/app-screen-1.png',
        imageAlt: 'iPhone app preferences selection screen'
      },
      {
        step: 2,
        title: 'Approve your weekly meal plan',
        description:
          'Once per week, approve the meal plan generated for you by Omnifood AI. You can change ingredients, swap entire meals, or even add your own recipes.',
        imageUrl: 'images/screens/app-screen-2.png',
        imageAlt: 'iPhone app meal approving plan screen'
      },
      {
        step: 3,
        title: 'Receive meals at convenient time',
        description:
          'Best chefs in town will cook your selected meal every day, and we will deliver it to your door whenever works best for you. You can change delivery schedule and address daily!',
        imageUrl: 'images/screens/app-screen-3.png',
        imageAlt: 'iPhone app delivery screen'
      }
    ]);
  }
}
