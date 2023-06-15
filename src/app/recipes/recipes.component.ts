import { RecipesService } from './../services/recipes.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-recipes',
  templateUrl: './recipes.component.html',
  styleUrls: ['./recipes.component.scss']
})
export class RecipesComponent implements OnInit {
  public recipes:any = null;

  constructor(private recipesService: RecipesService){}

  ngOnInit(): void {
    this.recipesService.getComplexSearch().subscribe(data => {
      this.recipes = data['results'];
      console.log('[getRandomRecipes]',this.recipes)
    });
  }

}
