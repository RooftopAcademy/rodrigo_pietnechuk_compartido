import { Request, Response } from 'express';
import type User from '../../../domain/entities/user.entity';
import userRepository from '../../../infraestructure/repositories/user.repository';

export default class FindUserByIdAction {
  public static async run(req: Request, res: Response): Promise<Response> {
    const user: User | null = await userRepository.findOneById(req.params.id);

    if (user) {
      return res.status(200).json(user);
    }

    return res.status(404).send('User not found');
  }
}
