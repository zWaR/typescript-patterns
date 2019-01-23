import { Adapter, Adaptee } from './service';

class TryAdapter {

  static run(): void {
    let adaptee = new Adaptee();
    let adapter = new Adapter(adaptee);

    adapter.request();
  }

}

TryAdapter.run();
