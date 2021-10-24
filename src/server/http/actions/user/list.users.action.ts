import { Request, Response } from 'express';
import type ListUsersCommand from '../../../application/commands/user/list.users.command';
import ListUsersHandler from '../../../application/handlers/user/list.users.handler';
import type User from '../../../domain/entities/user.entity';

export default class ListUsersAction {
  public static async run(req: Request, res: Response): Promise<Response> {
    const command: ListUsersCommand = {
      name: req.query.name?.toString(),
      email: req.query.email?.toString(),
      username: req.query.username?.toString(),
    };

    const users: User[] = await ListUsersHandler.execute(command);

    return res.status(200).json(users);
  }
}
