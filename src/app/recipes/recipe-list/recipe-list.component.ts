import { Component, OnInit } from '@angular/core';

import { Recipe } from '../recipe.model';

@Component({
  selector: 'app-recipe-list',
  templateUrl: './recipe-list.component.html',
  styleUrls: ['./recipe-list.component.css']
})
export class RecipeListComponent implements OnInit {

  recipes: Recipe[] = [
    new Recipe('Fat Head Keto Pizza', 'Low carb pizza dough using Mozarella, Cream Cheese, almond flour and egg', 'https://cdn4.ruled.me/wp-content/uploads/2014/08/pepperonipizza.jpg'),
    new Recipe('Scrambled Eggs with Avocado', 'Keto friendly breakfast with scrambled eggs, avocado and dill', 'https://s-media-cache-ak0.pinimg.com/736x/1a/2a/9f/1a2a9f49e07dba5f6333ab1a2f6b7f3d.jpg')
  ];

  constructor() { }

  ngOnInit() {
  }

}
