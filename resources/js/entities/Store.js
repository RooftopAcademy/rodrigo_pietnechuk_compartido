import UserBase from "./UserBase";
import Catalog from "./Catalog";

export default class Store {
  constructor() {
    this._users = new UserBase();
    this._catalog = new Catalog();
  }

  get users() {
    return this._users;
  }

  get catalog() {
    return this._catalog;
  }
}
