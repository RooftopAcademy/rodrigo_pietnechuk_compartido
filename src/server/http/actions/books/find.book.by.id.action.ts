import { Request, Response } from 'express';
import type Book from '../../../domain/entities/book.entity';
import bookRepository from '../../../infraestructure/repositories/book.repository';

export default class FindBookByIdAction {
  public static async run(req: Request, res: Response): Promise<Response> {
    const book: Book | null = await bookRepository.findOneById(req.params.id);

    if (book) {
      return res.status(200).json(book);
    }

    return res.status(404).send('Book not found');
  }
}
