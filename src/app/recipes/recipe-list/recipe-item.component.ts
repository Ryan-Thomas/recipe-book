import {Component, OnInit, Input} from '@angular/core';

import { Recipe } from '../recipe';

@Component({
  selector: 'rb-recipe-item',
  templateUrl: 'recipe-item.component.html',
  styles: []
})
export class RecipeItemComponent implements OnInit {
  // Specified here that the recipe is an input from outside
  @Input() recipe: Recipe;
  recipeId: number;

  constructor() { }

  ngOnInit() {
  }

}
