import { Injectable } from '@angular/core';
import {Recipe} from "./recipe";
import {Ingredient} from "../shared/ingredient";

@Injectable()
export class RecipeService {
  recipes: Recipe[] = [
    new Recipe('Schnitzel', 'Very tasty', 'http://bit.ly/24sRYmW', [
      new Ingredient('French Fries', 2),
      new Ingredient('Pork Meat', 1),
    ]),
    new Recipe('Summer Salad', 'Okayish', 'http://bit.ly/1kk4H6v', []),
  ];

  constructor() { }

  getRecipes() {
    return this.recipes;
  }

  getRecipe(recipeIndex: number): Recipe {
    throw new Error("Not yet implemented");
  }

  deleteRecipe(selectedRecipe: Recipe) {

  }
}
