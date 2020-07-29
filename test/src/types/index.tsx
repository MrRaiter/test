type NutritionInfo = {
  calories: number;
  fat: number;
  carb: number;
  protein: number;
};

export type Dessert = {
  Dessert: string;
  nutritionInfo: NutritionInfo;
};

export interface StoreState {
  desserts: Dessert[];
}
export interface StoreReducer {
  desserts: StoreState;
}
