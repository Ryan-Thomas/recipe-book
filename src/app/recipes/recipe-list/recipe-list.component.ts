import {Component, OnInit, EventEmitter, Output} from '@angular/core';
import { Recipe } from '../recipe';
import {RecipeService} from "../recipe.service";

@Component({
  selector: 'rb-recipe-list',
  templateUrl: 'recipe-list.component.html',
})
export class RecipeListComponent implements OnInit {
  recipes: Recipe[] = [];

  @Output() recipeSelected = new EventEmitter<Recipe>();

  constructor(private recipeService: RecipeService) { }

  ngOnInit() {
    this.recipes = this.recipeService.getRecipes();
  }

  // Used to update the recipe detail. Eventually we'll do this with routing
  // When I click on the recipe-list, this onSelected is fired which tells me that
  // you selected this recipe here and we want to give it to the recipe-deteail
  // component, which will be a sibling to this compoentn
  onSelected(recipe: Recipe) {
    this.recipeSelected.emit(recipe);
  }

}
