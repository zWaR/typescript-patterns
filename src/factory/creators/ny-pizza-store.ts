import { PizzaStore } from '.';
import { NYCheesePizza, EmptyPizza, PizzaBase } from '../domain';

export class NYPizzaStore extends PizzaStore {

  public createPizza(type: string): PizzaBase {
    switch(type) {
      case "cheese": {
        return new NYCheesePizza();
      }
      default:
        return new EmptyPizza();
    }
  }

}
