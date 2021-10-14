import UserBase from '../collections/UserBase';
import Catalog from '../collections/Catalog';

export default class Store {
  private users: UserBase;
  private catalog: Catalog;

  public constructor() {
    this.users = new UserBase();
    this.catalog = new Catalog();
  }

  public getUsers(): UserBase {
    return this.users;
  }

  public getCatalog(): Catalog {
    return this.catalog;
  }
}
