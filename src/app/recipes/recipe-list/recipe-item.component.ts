import {Component, Input} from '@angular/core';

import { Recipe } from '../recipe';

@Component({
  selector: 'rb-recipe-item',
  templateUrl: 'recipe-item.component.html',
  styles: []
})
export class RecipeItemComponent {
  // Specified here that the recipe is an input from outside
  @Input() recipe: Recipe;
  @Input() recipeId: number;

}
