class User {
  constructor() {
    this._id = String();
    this._lastName = String();
    this._firstName = String();
    this._username = String();
    this._password = String();
    this._cart = new Cart();
    this._favorites = new FavoritesCollection();
  }

  get id() {
    return this._id;
  }

  set id(value) {
    const type = typeof value;
    if (type !== "string") {
      throw new TypeError(`String expected, got ${type}.`);
    }

    this._id = value;
  }

  get lastName() {
    return this.__lastName;
  }

  set lastName(value) {
    const type = typeof value;
    if (type !== "string") {
      throw new TypeError(`String expected, got ${type}.`);
    }

    this.__lastName = value;
  }

  get firstName() {
    return this._firstName;
  }

  set firstName(value) {
    const type = typeof value;
    if (type !== "string") {
      throw new TypeError(`String expected, got ${type}.`);
    }

    this._firstName = value;
  }

  get username() {
    return this._username;
  }

  set username(value) {
    const type = typeof value;
    if (type !== "string") {
      throw new TypeError(`String expected, got ${type}.`);
    }

    this._username = value;
  }

  get cart() {
    return this._cart;
  }

  get favorites() {
    return this._favorites;
  }

  setPassword(newPw, oldPw) {
    if (typeof newPw !== "string" || typeof oldPw !== "string") {
      throw new TypeError("Expected two strings.");
    }

    if (oldPw !== newPw) {
      throw new Error("Old password is incorrect.");
    }

    this._password = newPw;
  }
}
