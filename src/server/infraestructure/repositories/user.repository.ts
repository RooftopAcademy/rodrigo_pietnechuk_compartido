import type User from '../../domain/entities/user.entity';
import usersData from '../data/users.json';

class UserRepository {
  private users: User[];

  public constructor() {
    this.users = usersData;
  }

  public async findOneById(id: string): Promise<User | null> {
    const user: User | undefined = this.users.find((u) => u.id == id);

    return user ?? null;
  }

  public async findAll(): Promise<User[]> {
    return this.users;
  }
}

export default new UserRepository();
