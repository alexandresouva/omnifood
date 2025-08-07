import { Component, computed, input } from '@angular/core';

import { MealType } from '@sections/meals/models/meal.model';

const mealClassMap: Record<MealType, string> = {
  vegetarian: 'bg-green-400',
  vegan: 'bg-lime-400',
  paleo: 'bg-yellow-300'
};

@Component({
  selector: 'app-meal-tag',
  imports: [],
  template: `
    <span
      class="text-text-strong inline-block rounded-full px-2 py-1 text-xs leading-none font-semibold uppercase"
      [class]="tagColor()"
    >
      {{ type() }}
    </span>
  `
})
export class MealTag {
  type = input.required<MealType>();

  protected readonly tagColor = computed(
    () => mealClassMap[this.type()] || 'bg-gray-300'
  );
}
