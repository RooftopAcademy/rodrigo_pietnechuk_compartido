import { Request, Response } from 'express';
import type Book from '../../../domain/entities/book.entity';
import type ListBooksComand from '../../../application/commands/book/list.books.command';
import ListBooksHandler from '../../../application/handlers/book/list.books.handler';

export default class ListBooksAction {
  public static async run(req: Request, res: Response): Promise<Response> {
    const command: ListBooksComand = {
      name: req.query.name?.toString(),
      name_like: req.query.name_like?.toString(),
      author: req.query.author?.toString(),
      publicationYear: req.query.publicationYear?.toString(),
    };

    const books: Book[] = await ListBooksHandler.execute(command);

    return res.status(200).json(books);
  }
}
