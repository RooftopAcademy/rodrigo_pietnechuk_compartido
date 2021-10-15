import type { Application } from 'express';

export default abstract class CommonRoutes {
  protected app: Application;
  private name: string;

  public constructor(app: Application, name: string) {
    this.app = app;
    this.name = name;
    this.setUpRoutes();
  }

  public getName(): string {
    return this.name;
  }

  abstract setUpRoutes(): Application;
}
