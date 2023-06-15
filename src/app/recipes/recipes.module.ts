import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RecipesComponent } from './recipes.component';
import { Routes, RouterModule } from '@angular/router';

import {MatGridListModule} from '@angular/material/grid-list';
import {MatButtonModule} from '@angular/material/button';
import {MatCardModule} from '@angular/material/card';
import {MatIconModule} from '@angular/material/icon';
import {MatChipsModule} from '@angular/material/chips';

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
    RouterModule.forChild(routes),
    MatGridListModule,
    MatButtonModule,
    MatCardModule,
    MatIconModule,
    MatChipsModule
  ]
})
export class RecipesModule { }
