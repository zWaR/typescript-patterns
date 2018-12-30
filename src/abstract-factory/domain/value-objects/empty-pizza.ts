import { PizzaBase } from '.';
import { PizzaIngredientFactoryInterface } from '../../service';

export class EmptyPizza extends PizzaBase {

  constructor(
    private readonly pizzaIngredientFactory: PizzaIngredientFactoryInterface,
  ) {
    super();
  }

  public prepare(): void {
    console.log('Preparing an empty pizza');
  }

}
