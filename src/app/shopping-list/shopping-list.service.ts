import { EventEmitter } from '@angular/core';
import { Ingredient } from 'app/shared/ingredient.model';

export class ShoppingListService {
  ingredientsChanged =  new EventEmitter<Ingredient[]>();
  private ingredients: Ingredient[] = [
    new Ingredient('Apples', 6),
    new Ingredient('Pears', 4),
    new Ingredient('Tomatoes', 5),
    new Ingredient('Broccoli', 2),
    new Ingredient('Cream', 1),
    new Ingredient('Eggs', 12)
  ];

  getIngredients() {
    return this.ingredients.slice();
  }
  addIngredient(ingredient: Ingredient) {
    this.ingredients.push(ingredient);
    this.ingredientsChanged.emit(this.ingredients.slice());
  }
  addIngredients(ingredients: Ingredient[]) {
    this.ingredients.push(...ingredients);
    this.ingredientsChanged.emit(this.ingredients.slice());
  }
  removeIngredient(id) {
    this.ingredients.slice(id, 1);
  }

  constructor() { }

}
