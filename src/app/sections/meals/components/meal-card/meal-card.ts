import { Component, input } from '@angular/core';

import {
  Flame,
  UtensilsCrossed,
  Star,
  LucideAngularModule
} from 'lucide-angular';
import { MealTag } from '../meal-tag/meal-tag';
import { Meal } from '../../models/meal.model';

@Component({
  selector: 'app-meal-card',
  imports: [LucideAngularModule, MealTag],
  templateUrl: './meal-card.html'
})
export class MealCard {
  meal = input.required<Meal>();

  protected icons = {
    flame: Flame,
    utensilsCrossed: UtensilsCrossed,
    star: Star
  };
}
