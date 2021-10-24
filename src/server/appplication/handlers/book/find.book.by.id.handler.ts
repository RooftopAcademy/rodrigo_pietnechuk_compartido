import FindBookByIdCommand from '../../commands/book/find.book.by.id.command';
import type Book from '../../../domain/entities/book.entity';
import bookRepository from '../../../infraestructure/repositories/book.repository';

export default class FindBookByIdHandler {
  public static async execute(command: FindBookByIdCommand): Promise<Book> {
    const book: Book | null = await bookRepository.findOneById(command.id);

    if (!book) {
      throw new Error('Book not found.');
    }

    return book;
  }
}
