import { PizzaBase } from '../domain';

export abstract class PizzaStore {

  abstract createPizza(type: string): PizzaBase;

  public orderPizza(type: string): PizzaBase {
    let pizza: PizzaBase;

    pizza = this.createPizza(type);

    pizza.prepare();
    pizza.bake();
    pizza.cut();
    pizza.box();

    return pizza;

  }

}
