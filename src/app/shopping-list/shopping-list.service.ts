import {Ingredient} from "../shared/ingredient";
export class ShoppingListService {
  private items: Ingredient[] = [];

  constructor() { }

  getItems() {
    return this.items;
  }

  addItems(items: Ingredient[]) {
    console.log('this.items', this.items); // debug
    Array.prototype.push.apply(this.items, items);
  }
}
