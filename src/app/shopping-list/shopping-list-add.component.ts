import {Component, OnInit, Input, OnChanges} from '@angular/core';
import {Ingredient} from '../shared/ingredient';
import {ShoppingListService} from './shopping-list.service';

@Component({
  selector: 'rb-shopping-list-add',
  templateUrl: 'shopping-list-add.component.html',
  styles: []
})
export class ShoppingListAddComponent implements OnChanges {
  @Input() item: Ingredient;
  isAdd = true;

  constructor(private sls: ShoppingListService) { }

  // Fired whenever the input changes (Whenever the user selects a new item)
  ngOnChanges(changes) {
    console.log('changes', changes);
    if (changes.item.currentValue === null) {
      this.isAdd = true;
      this.item = {name: null, amount: null};
    } else {
      this.isAdd = false;
    }
  }

  onSubmit(ingredient: Ingredient) {
    const newIngredient = new Ingredient(ingredient.name, ingredient.amount);
    if (!this.isAdd) {
      this.sls.editItem(this.item, newIngredient);
    } else {
      this.item = newIngredient;
      this.sls.addItem(this.item);
    }
  }

}
