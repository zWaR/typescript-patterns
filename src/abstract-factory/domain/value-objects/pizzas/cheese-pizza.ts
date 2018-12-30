import { PizzaBase } from '..';
import { PizzaIngredientFactoryInterface } from '../../../service';

export class CheesePizza extends PizzaBase {

  constructor(
    private readonly pizzaIngredientFactory: PizzaIngredientFactoryInterface,
  ) {
    super();
  }

  public prepare(): void {
    console.log(`Preparing ${this.name}`);
    this.dough = this.pizzaIngredientFactory.createDough();
    this.sauce = this.pizzaIngredientFactory.createSauce();
    this.cheese = this.pizzaIngredientFactory.createCheese();
  }

}
