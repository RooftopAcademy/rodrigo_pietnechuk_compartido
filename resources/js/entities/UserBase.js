import User from "./User";

export default class UserBase {
  constructor() {
    this._users = [];
  }

  _usernameExists(username) {
    return this.users.find((user) => user.username === username) !== undefined;
  }

  _emailExists(email) {
    return this.users.find((user) => user.email === email) !== undefined;
  }

  get users() {
    return this._users;
  }

  add(user) {
    if (user instanceof User) {
      if (this._usernameExists(user.username)) {
        throw new Error("This username already exists");
      }

      if (this._emailExists(user.email)) {
        throw new Error("This email already exists");
      }

      this.users.push(user);
    } else {
      throw new TypeError(`User expected, got ${typeof user}.`);
    }
  }
}
