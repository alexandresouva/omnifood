export type MealType = 'vegetarian' | 'vegan' | 'paleo';

export type Meal = {
  name: string;
  imageUrl: string;
  type: MealType[];
  calories: number;
  nutriscore: number;
  rating: number;
  numberOfReviews: number;
};
