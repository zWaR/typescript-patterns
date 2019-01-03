import { Invoker } from './invoker';
import { Light } from './receivers';
import { LightOnCommand } from './commands/light-on-command';

class TryCommand {

  static run() {
    const invoker = new Invoker();
    const light: Light = new Light();
    const command: LightOnCommand = new LightOnCommand(light);

    invoker.setCommand(command);

    invoker.runCommand();
    invoker.undoCommand();
  }

}

TryCommand.run();
