import { Singleton } from '.';

class TrySingleton {

  public static run() {
    const instance1 = Singleton.getInstance();
    const instance2 = Singleton.getInstance();

    instance1.variable = 'Variable set in instance 1';
    console.log(`instance2: ${instance2.variable}`);

    instance2.variable = 'Variable set in instance 2';
    console.log(`instance1: ${instance1.variable}`);

    // const instance3 = new Singleton(); -> Instantiating a singleton results in an error, since the constructor is private.
    // (With my tsconfig configuration it won't even compile)

  }

}

TrySingleton.run();
