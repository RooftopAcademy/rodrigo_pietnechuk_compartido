import type ListUsersCommand from '../../commands/user/list.users.command';
import type User from '../../../domain/entities/user.entity';
import userRepository from '../../../infraestructure/repositories/user.repository';

export default class ListUsersHandler {
  public static async execute(command: ListUsersCommand): Promise<User[]> {
    const keys = Object.keys(command) as Array<keyof ListUsersCommand>;
    const users: User[] = await userRepository.findAll();

    return users
      .filter((user) => keys.every((key) => [undefined, user[key]].includes(command[key])));
  }
}
