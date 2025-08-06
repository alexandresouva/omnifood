import { inject, Injectable } from '@angular/core';
import { MealsApi } from '../api/meals-api';
import { Observable } from 'rxjs';
import { Meal } from '../models/meal.model';

@Injectable({
  providedIn: 'root'
})
export class MealsService {
  private readonly _mealsApi = inject(MealsApi);

  highlightedMeals(): Observable<Meal[]> {
    return this._mealsApi.highlightedMeals();
  }
}
