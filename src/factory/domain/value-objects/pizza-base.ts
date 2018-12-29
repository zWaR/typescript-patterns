
export abstract class PizzaBase {

  protected name: string;
  protected doug: string;
  protected sauce: string;
  protected toppings: string[] = [];

  public prepare(): void {
    console.log('Preparing pizza');
  }

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

}
