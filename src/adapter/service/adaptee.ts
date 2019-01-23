import { AdapteeInterface } from './adaptee-interface';

export class Adaptee implements AdapteeInterface {

  specificRequest(): void {
    console.log('A specific request on the adaptee has been triggered');
  }

}
