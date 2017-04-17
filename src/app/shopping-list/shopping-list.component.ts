import { Component, OnInit } from '@angular/core';
import { Ingredient } from '../shared/ingredient.model';

@Component({
  selector: 'app-shopping-list',
  templateUrl: './shopping-list.component.html',
  styleUrls: ['./shopping-list.component.css']
})
export class ShoppingListComponent implements OnInit {
  ingredients: Ingredient[] = [
    new Ingredient('Apples',6),
    new Ingredient('Pears',4),
    new Ingredient('Tomatoes',5),
    new Ingredient('Broccoli',2),
    new Ingredient('Cream',1),
    new Ingredient('Eggs',12)
  ];
  constructor() { }
  ngOnInit() { }

  onIngredientAdded(ingredient: Ingredient) {
    this.ingredients.push(ingredient);
  }

}
