import { PizzaIngredientFactoryInterface } from '../service';
import { DoughBase,
  ThinCrustDough,
  SauceBase,
  MarinaraSauce,
  ReggianoCheese,
  VeggieBase,
  Garlic,
  Onion,
  Mushroom,
  PepperoniBase,
  SlicedPepperoni,
  ClamsBase,
  RedPepper,
  FreshClams
} from '../domain';

export class NYPizzaIngredientFactory implements PizzaIngredientFactoryInterface {

  public createDough(): DoughBase {
    return new ThinCrustDough();
  }

  public createSauce(): SauceBase {
    return new MarinaraSauce();
  }

  public createCheese(): SauceBase {
    return new ReggianoCheese();
  }

  public createVeggies(): VeggieBase[] {
    const veggies: VeggieBase[] = [
      new Garlic(),

      new Onion(),

      new Mushroom(),

      new RedPepper(),

    ];
    return veggies;
  }

  public createPepperoni(): PepperoniBase {
    return new SlicedPepperoni();
  }

  public createClam(): ClamsBase {
    return new FreshClams();
  }

}
