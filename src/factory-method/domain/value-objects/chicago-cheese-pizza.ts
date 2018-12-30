import { PizzaBase } from '.';

export class ChicagoCheesePizza extends PizzaBase {

  constructor() {
    super();
    this.name = 'Chicago Style Deep Dish Cheese Pizza';
    this.doug = 'Extra Thick Crust Dough';
    this.sauce = 'Plum Tomato Sauce';

    this.toppings.push('Shredded Mozzarella Cheese');
  }

  public cut(): void {
    console.log('Cutting pizza into square slices.');
  }

}
