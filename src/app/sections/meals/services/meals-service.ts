import { Injectable } from '@angular/core';

import { Observable, of } from 'rxjs';
import { Meal } from '../models/meal.model';

@Injectable({
  providedIn: 'root'
})
export class MealsService {
  highlightedMeals(): Observable<Meal[]> {
    return of([
      {
        name: 'Japanese Gyozas',
        imageUrl: 'images/meals/meal-1.jpg',
        type: ['vegetarian'],
        calories: 650,
        nutriscore: 74,
        rating: 4.9,
        numberOfReviews: 537
      },
      {
        name: 'Avocado Salad',
        imageUrl: 'images/meals/meal-2.jpg',
        type: ['vegan', 'paleo'],
        calories: 400,
        nutriscore: 92,
        rating: 4.8,
        numberOfReviews: 441
      }
    ]);
  }
}
