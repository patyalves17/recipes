import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RecipesComponent } from './recipes.component';
import { Routes, RouterModule } from '@angular/router';

const routes: Routes = [
  {
    path:'',
    component: RecipesComponent
  }
]

@NgModule({
  declarations: [ RecipesComponent ],
  imports: [
    CommonModule,
    RouterModule.forChild(routes)
  ]
})
export class RecipesModule { }
