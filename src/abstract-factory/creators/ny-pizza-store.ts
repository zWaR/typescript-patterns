import { PizzaStore } from '.';
import { CheesePizza, EmptyPizza, PizzaBase } from '../domain';
import { PizzaIngredientFactoryInterface } from '../service';
import { NYPizzaIngredientFactory } from '.';

export class NYPizzaStore extends PizzaStore {

  public createPizza(type: string): PizzaBase {
    let pizza: PizzaBase;
    const pizzaIngredientFactory: PizzaIngredientFactoryInterface = new NYPizzaIngredientFactory();

    switch(type) {
      case 'cheese': {
        pizza = new CheesePizza(pizzaIngredientFactory);
        pizza.setName('New York Style Cheese Pizza');
        break;
      }
      default: {
        pizza = new EmptyPizza(pizzaIngredientFactory);
        pizza.setName('New empty pizza');
        break;
      }
    }

    return pizza;
  }

}
