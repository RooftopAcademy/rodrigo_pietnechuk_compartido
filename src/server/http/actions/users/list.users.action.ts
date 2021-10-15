import { Request, Response } from 'express';
import type User from '../../../domain/entities/user.entity';
import userRepository from '../../../infraestructure/repositories/user.repository';

export default class ListUsersAction {
  public static async run(_req: Request, res: Response): Promise<Response> {
    const users: User[] = await userRepository.findAll();

    return res.status(200).json(users);
  }
}
