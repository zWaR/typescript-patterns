import { DoughBase, SauceBase, CheeseBase, VeggieBase, PepperoniBase, ClamsBase } from '../domain';

export interface PizzaIngredientFactoryInterface {

  createDough(): DoughBase;

  createSauce(): SauceBase;

  createCheese(): CheeseBase;

  createVeggies(): VeggieBase[];

  createPepperoni(): PepperoniBase;

  createClam(): ClamsBase;

}
