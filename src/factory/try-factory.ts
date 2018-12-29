import { NYPizzaStore, ChicagoPizzaStore } from './creators';
import { PizzaBase } from './domain';

class TryFactory {

  public static run() {
    const nyStore: NYPizzaStore = new NYPizzaStore();
    const chicagoStore: ChicagoPizzaStore = new ChicagoPizzaStore();

    const nyPizza: PizzaBase = nyStore.orderPizza('cheese');
    const chicagoPizza: PizzaBase = chicagoStore.orderPizza('cheese');

    console.log(`NY pizza ${nyPizza.getName()} ordered`);
    console.log(`Chicago pizza ${chicagoPizza.getName()} ordered`);
  }

}

TryFactory.run();
