import { Injectable } from '@angular/core';
import {Recipe} from "./recipe";

@Injectable()
export class RecipeService {
  recipes: Recipe[] = [
    new Recipe('Schnitzel', 'Very tasty', 'http://bit.ly/24sRYmW', []),
    new Recipe('Summer Salad', 'Okayish', 'http://bit.ly/1kk4H6v', []),
  ];

  constructor() { }

  getRecipes() {
    return this.recipes;
  }

}
