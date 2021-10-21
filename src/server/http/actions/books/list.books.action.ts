import { Request, Response } from 'express';
import type Book from '../../../domain/entities/book.entity';
import bookRepository from '../../../infraestructure/repositories/book.repository';

export default class ListBooksAction {
  public static async run(req: Request, res: Response): Promise<Response> {
    let books: Book[] = await bookRepository.findAll();

    const filter: string = req.query.name_like?.toString().toLowerCase() ?? '';

    if (filter) {
      books = books.filter((b) => b.name.toLowerCase().includes(filter));
    }

    return res.status(200).json(books);
  }
}
