import { TargetInterface } from './target-interface';
import { Adaptee } from './adaptee';

export class Adapter implements TargetInterface {

  constructor(private readonly adaptee: Adaptee) { }

  request(): void {
    this.adaptee.specificRequest();
  }

}
