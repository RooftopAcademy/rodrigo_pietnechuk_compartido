import type User from '../entities/User';

export default class UserBase {
  private users: User[];

  public constructor() {
    this.users = [];
  }

  public getUsers(): User[] {
    return this.users;
  }

  private usernameExists(username: string): boolean {
    return this.users.find((user: User): boolean => user.getUsername() == username) != undefined;
  }

  private emailExists(email: string): boolean {
    return this.users.find((user: User): boolean => user.getEmail() == email) !== undefined;
  }

  public add(user: User): void {
    if (this.usernameExists(user.getUsername())) {
      throw new Error('This username already exists');
    }

    if (this.emailExists(user.getEmail())) {
      throw new Error('This email already exists');
    }

    this.users.push(user);
  }

  public remove(id: string): void {
    this.users = this.users.filter((item: User): boolean => item.getId() != id);
  }
}
