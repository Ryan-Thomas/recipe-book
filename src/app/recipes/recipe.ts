import {Ingredient} from "../../shared/ingredient";
export class Recipe {
  // Later ingredients will be added
  constructor(public name, public description, public imagePath, public ingredients: Ingredient[]) {
  }
}
