import { ShoppingListService } from '../shopping-list/shopping-list.service';
import { Injectable, EventEmitter } from '@angular/core';
import { Recipe } from './recipe.model';
import { Ingredient } from '../shared/ingredient.model';

@Injectable()
export class RecipeService {

  public recipeSelected = new EventEmitter<Recipe>();
  private recipes: Recipe[] = [
    new Recipe(
      'Fat Head Keto Pizza',
      'Low carb pizza dough using Mozarella, Cream Cheese, almond flour and egg',
      'https://cdn4.ruled.me/wp-content/uploads/2014/08/pepperonipizza.jpg',
      [
        new Ingredient('Almond flour', 2),
        new Ingredient('Mozarella', 3),
        new Ingredient('Cream Cheese', 0.5),
        new Ingredient('Egg', 1)
      ]
    ),
    new Recipe(
      'Scrambled Eggs with Avocado',
      'Keto friendly breakfast with scrambled eggs, avocado and jalapenos',
      'https://s-media-cache-ak0.pinimg.com/736x/1a/2a/9f/1a2a9f49e07dba5f6333ab1a2f6b7f3d.jpg',
      [
        new Ingredient('Egg', 3),
        new Ingredient('Avocado', 0.5),
        new Ingredient('Jalepenos', 15),
        new Ingredient('Cream', 0.25)
      ]
    )
  ];

  constructor(private shoppingListService: ShoppingListService) { }

  getRecipes() {
    return this.recipes.slice();
  }
  addToShoppingList(ingredients: Ingredient[]) {
    this.shoppingListService.addIngredients(ingredients);
  }

}
