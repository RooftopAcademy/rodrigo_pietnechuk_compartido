import FindUserByIdCommand from '../../commands/user/find.user.by.id.command';
import type User from '../../../domain/entities/user.entity';
import userRepository from '../../../infraestructure/repositories/user.repository';

export default class FindUserByIdHandler {
  public static async execute(command: FindUserByIdCommand): Promise<User> {
    const user: User | null = await userRepository.findOneById(command.id);

    if (!user) {
      throw new Error('User not found.');
    }

    return user;
  }
}
