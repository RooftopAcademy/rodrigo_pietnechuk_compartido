import { Request, Response } from 'express';
import type Book from '../../../domain/entities/book.entity';
import type FindBookByIdCommand from '../../../application/commands/book/find.book.by.id.command';
import FindBookByIdHandler from '../../../application/handlers/book/find.book.by.id.handler';

export default class FindBookByIdAction {
  public static async run(req: Request, res: Response): Promise<Response> {
    const command: FindBookByIdCommand = { id: req.params.id };

    try {
      const book: Book = await FindBookByIdHandler.execute(command);
      return res.status(200).json(book);
    } catch (error) {
      return res.status(404).send((error as Error).message);
    }
  }
}
