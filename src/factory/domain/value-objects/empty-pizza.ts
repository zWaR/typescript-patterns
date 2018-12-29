import { PizzaBase } from '.';

export class EmptyPizza extends PizzaBase {

  constructor() {
    super();
    this.name = '';
    this.doug = '';
    this.sauce = '';

    this.toppings.push('');
  }

}
