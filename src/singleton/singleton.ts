
export class Singleton {
  private static _singletonInstance: Singleton = new Singleton();
  private _variable: string;

  private constructor() { }

  public static getInstance(): Singleton {
    return Singleton._singletonInstance;
  }

  set variable(value: string) {
    this._variable = value;
  }

  get variable(): string {
    return this._variable;
  }

}
