import { Component, inject } from '@angular/core';
import { toSignal } from '@angular/core/rxjs-interop';

import { Check, LucideAngularModule } from 'lucide-angular';
import { MealCard } from '@sections/meals/components/meal-card/meal-card';
import { MealsService } from '@sections/meals/services/meals-service';
import { OmniTitle } from '@ui/omni-title/omni-title';

@Component({
  selector: 'app-meals',
  imports: [LucideAngularModule, MealCard, OmniTitle],
  templateUrl: './meals.html'
})
export class Meals {
  private readonly _mealsService = inject(MealsService);

  highlightedMeals = toSignal(this._mealsService.highlightedMeals(), {
    initialValue: []
  });

  protected readonly checkIcon = Check;
  protected readonly mealsTypes = [
    'Vegetarian',
    'Vegan',
    'Pescatarian',
    'Gluten-free',
    'Lactose-free',
    'Keto',
    'Paleo',
    'Low FODMAP',
    'Kid-friendly'
  ];
}
