import {Component, OnInit, EventEmitter, Output} from '@angular/core';
import { Recipe } from '../recipe';

@Component({
  selector: 'rb-recipe-list',
  templateUrl: 'recipe-list.component.html',
})
export class RecipeListComponent implements OnInit {
  recipes: Recipe[] = [
    new Recipe('Schnitzel', 'Very tasty', 'http://bit.ly/24sRYmW', []),
    new Recipe('Summer Salad', 'Okayish', 'http://bit.ly/1kk4H6v', []),
  ];

  @Output() recipeSelected = new EventEmitter<Recipe>();

  constructor() { }

  ngOnInit() {
  }

  // Used to update the recipe detail. Eventually we'll do this with routing
  // When I click on the recipe-list, this onSelected is fired which tells me that
  // you selected this recipe here and we want to give it to the recipe-deteail
  // component, which will be a sibling to this compoentn
  onSelected(recipe: Recipe) {
    this.recipeSelected.emit(recipe);
  }

}
