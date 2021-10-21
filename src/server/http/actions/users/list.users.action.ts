import { Request, Response } from 'express';
import type User from '../../../domain/entities/user.entity';
import userRepository from '../../../infraestructure/repositories/user.repository';

export default class ListUsersAction {
  public static async run(req: Request, res: Response): Promise<Response> {
    let users: User[] = await userRepository.findAll();

    const filters: Map<keyof User, string> = new Map([
      ['email', req.query.email?.toString() ?? ''],
      ['username', req.query.username?.toString() ?? ''],
    ]);

    filters.forEach((value, key) => {
      if (value) {
        users = users.filter((u) => u[key] == value);
      }
    });

    return res.status(200).json(users);
  }
}
