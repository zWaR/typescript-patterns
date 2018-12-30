import { DoughBase,
  SauceBase,
  VeggieBase,
  CheeseBase,
  PepperoniBase,
  ClamsBase
} from '..';

export abstract class PizzaBase {

  protected name: string;
  protected dough: DoughBase;
  protected sauce: SauceBase;
  protected veggies: VeggieBase[];
  protected cheese: CheeseBase;
  protected pepperoni: PepperoniBase;
  protected clams: ClamsBase;

  abstract prepare(): void;

  public bake(): void {
    console.log('Bake pizza');
  }

  public cut(): void {
    console.log('Cut pizza into diagonal slices.');
  }

  public box(): void {
    console.log('Box pizza');
  }

  public getName(): string {
    return this.name;
  }

  public setName(name: string): void {
    this.name = name;
  }

}
