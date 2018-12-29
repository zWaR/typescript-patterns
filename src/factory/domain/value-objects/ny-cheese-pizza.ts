import { PizzaBase } from '.';

export class NYCheesePizza extends PizzaBase {

  constructor() {
    super();
    this.name = 'NY Style Sauce and Cheese Pizza';
    this.doug = 'Thin Crust Dough';
    this.sauce = 'Marinara sauce';

    this.toppings.push('Grated Reggiano Cheese');
  }

}
