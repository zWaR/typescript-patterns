import { CommandInterface } from './command-interface';
import { Light } from 'command/receivers';

export class LightOnCommand implements CommandInterface {

  light: Light;

  constructor(light: Light) {
    this.light = light;
  }

  execute(): void {
    this.light.on();
  }

  undo(): void {
    this.light.off();
  }
}
