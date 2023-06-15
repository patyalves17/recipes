export interface Recipe {
  id:number,
  title: string;
  image: string,
  summary: string,
  readyInMinutes: number;
  servings: number,
  pricePerServing: number,
  dishTypes: string[],
  glutenFree: boolean,
  dairyFree: boolean
  vegan: boolean,
  vegetarian: boolean,
  healthSore: number,
  analyzedInstructions:string[],
  ingredients: string[]
}
