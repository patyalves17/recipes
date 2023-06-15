import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Recipe } from '../interfaces/recipe';


export interface RecipesRespo {
  number:number,
  offset: number,
  results: Recipe[],
  totalResults: number
}

@Injectable({
  providedIn: 'root'
})
export class RecipesService {
  private url = 'https://spoonacular-recipe-food-nutrition-v1.p.rapidapi.com/recipes/'

  constructor(private http: HttpClient) { }

  getComplexSearch(){
    return this.http.get<RecipesRespo>(`${this.url}complexSearch?query=meat&addRecipeInformation=true`)
  }

}
