import Cart from "./Cart";
import FavoritesCollection from "./FavoritesCollection";

export default class User {
  constructor() {
    this._id = String();
    this._lastName = String();
    this._firstName = String();
    this._username = String();
    this._password = String();
    this._cart = Cart();
    this._favorites = FavoritesCollection();
  }

  get id() {
    return this._id;
  }

  set id(value) {
    const type = typeof value;
    if (type === "string") {
      this._id = value;
    } else {
      throw new TypeError(`String expected, got ${type}.`);
    }
  }

  get lastName() {
    return this.__lastName;
  }

  set lastName(value) {
    const type = typeof value;
    if (type === "string") {
      this.__lastName = value;
    } else {
      throw new TypeError(`String expected, got ${type}.`);
    }
  }

  get firstName() {
    return this._firstName;
  }

  set firstName(value) {
    const type = typeof value;
    if (type === "string") {
      this._firstName = value;
    } else {
      throw new TypeError(`String expected, got ${type}.`);
    }
  }

  get username() {
    return this._username;
  }

  set username(value) {
    const type = typeof value;
    if (type === "string") {
      this._username = value;
    } else {
      throw new TypeError(`String expected, got ${type}.`);
    }
  }

  get cart() {
    return this._cart;
  }

  get favorites() {
    return this._favorites;
  }

  setPassword(newPw, oldPw) {
    if (typeof newPw === "string" && typeof oldPw === "string") {
      if (oldPw === this._password) {
        this._password = newPw;
      } else {
        throw new Error("Old password is incorrect.");
      }
    } else {
      throw new TypeError("Expected two strings.");
    }
  }
}
