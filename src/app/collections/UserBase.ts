import type User from '../models/User';

export default class UserBase {
  private _users: User[];

  public constructor() {
    this._users = [];
  }

  public get users(): User[] {
    return this._users;
  }

  public set users(value: User[]) {
    this._users = value;
  }

  private usernameExists(username: string): boolean {
    return this.users.find((user: User): boolean => user.username == username) != undefined;
  }

  private emailExists(email: string): boolean {
    return this.users.find((user: User): boolean => user.email == email) !== undefined;
  }

  public add(user: User): void {
    if (this.usernameExists(user.username)) {
      throw new Error('This username already exists');
    }

    if (this.emailExists(user.email)) {
      throw new Error('This email already exists');
    }

    this.users.push(user);
  }

  public remove(id: string): void {
    this.users = this.users.filter((item: User): boolean => item.id != id);
  }
}
