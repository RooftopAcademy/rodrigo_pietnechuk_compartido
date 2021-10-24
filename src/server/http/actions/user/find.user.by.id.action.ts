import { Request, Response } from 'express';
import type User from '../../../domain/entities/user.entity';
import type FindUserByIdCommand from '../../../appplication/commands/user/find.user.by.id.command';
import FindUserByIdHandler from '../../../appplication/handlers/user/find.user.by.id.handler';

export default class FindUserByIdAction {
  public static async run(req: Request, res: Response): Promise<Response> {
    const command: FindUserByIdCommand = { id: req.params.id };

    try {
      const user: User = await FindUserByIdHandler.execute(command);
      return res.status(200).json(user);
    } catch (error) {
      return res.status(404).send((error as Error).message);
    }
  }
}
