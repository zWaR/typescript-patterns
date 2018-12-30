import { PizzaStore } from '.';
import { PizzaBase, ChicagoCheesePizza, EmptyPizza } from '../domain';

export class ChicagoPizzaStore extends PizzaStore {

  createPizza(type: string): PizzaBase {
    switch(type) {
      case "cheese": {
        return new ChicagoCheesePizza();
      }
      default: {
        return new EmptyPizza();
      }
    }
  }

}
