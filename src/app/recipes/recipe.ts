import {Ingredient} from "../shared/ingredient";
export class Recipe {
  // Later ingredients will be added
  constructor(public name,
              public description: string,
              public imagePath: string,
              public ingredients: Ingredient[]) {
  }
}
