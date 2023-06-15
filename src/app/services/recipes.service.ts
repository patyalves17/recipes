import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class RecipesService {
  private url = 'https://spoonacular-recipe-food-nutrition-v1.p.rapidapi.com/recipes/'

  constructor(private http: HttpClient) { }

  getComplexSearch(){
    return this.http.get<any>(`${this.url}complexSearch?query=meat&addRecipeInformation=true`,  {
      headers: new HttpHeaders({
        'X-RapidAPI-Key': environment.rapidAPI.key,
        'X-RapidAPI-Host': environment.rapidAPI.host
      })
    })
  }

}
