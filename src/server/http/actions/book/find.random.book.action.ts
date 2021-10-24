import { Request, Response } from 'express';
import type Book from '../../../domain/entities/book.entity';
import bookRepository from '../../../infraestructure/repositories/book.repository';

export default class FindRandomBookAction {
  public static async run(_req: Request, res: Response): Promise<Response> {
    const book: Book | null = await bookRepository.findRandom();

    if (book) {
      return res.status(200).json(book);
    }

    return res.status(500).send('The catalog is empty');
  }
}
