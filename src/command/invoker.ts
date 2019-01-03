import { CommandInterface } from './commands';

export class Invoker {
  command: CommandInterface;

  setCommand(command: CommandInterface) {
    this.command = command;
  }

  runCommand() {
    this.command.execute();
  }

  undoCommand() {
    this.command.undo();
  }

}
