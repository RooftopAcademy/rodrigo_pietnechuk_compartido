import { Request, Response } from 'express';
import type Book from '../../../domain/entities/book.entity';
import bookRepository from '../../../infraestructure/repositories/book.repository';

export default class ListBooksAction {
  public static async run(_req: Request, res: Response): Promise<Response> {
    const books: Book[] = await bookRepository.findAll();

    return res.status(200).json(books);
  }
}
