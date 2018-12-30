import { NYPizzaStore } from './creators';
import { PizzaBase } from './domain';

class TryAbstractFactory {

  public static run() {
    const nyStore: NYPizzaStore = new NYPizzaStore();

    const nyPizza: PizzaBase = nyStore.orderPizza('cheese');

    console.log(`NY pizza ${nyPizza.getName()} ordered`);
  }

}

TryAbstractFactory.run();

