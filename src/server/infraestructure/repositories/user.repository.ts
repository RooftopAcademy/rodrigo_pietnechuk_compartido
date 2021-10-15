import type User from '../../domain/entities/user.entity';
import type RepositoryInterface from '../interfaces/RepositoryInterface';
import usersData from '../data/users.json';

class UserRepository implements RepositoryInterface<User> {
  private users: User[];

  public constructor() {
    this.users = usersData;
  }

  public async findOneById(id: string): Promise<User | null> {
    const user: User | undefined = this.users.find((u) => u.id == id);

    return user || null;
  }

  public async findAll(): Promise<User[]> {
    return this.users;
  }
}

export default new UserRepository();
