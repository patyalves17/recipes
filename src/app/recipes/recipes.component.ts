import { Component, OnInit } from '@angular/core';

import { Recipe } from '../core/interfaces/recipe';
import { RecipesService } from '../core/services/recipes.service';

@Component({
  selector: 'app-recipes',
  templateUrl: './recipes.component.html',
  styleUrls: ['./recipes.component.scss']
})
export class RecipesComponent implements OnInit {
  public recipes:Recipe[] = [];

  constructor(private recipesService: RecipesService){}

  ngOnInit(): void {
    this.recipesService.getComplexSearch().subscribe(data => {
      this.recipes = data.results;
      console.log('[getRandomRecipes][data]',data)
      console.log('[getRandomRecipes][recipes]',this.recipes)

    });
  }

  trackByMethod(index:number, el:any): number {
    return el.id;
  }

}
