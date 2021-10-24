/* eslint-disable camelcase */

import type ListBooksCommand from '../../commands/book/list.books.command';
import type Book from '../../../domain/entities/book.entity';
import bookRepository from '../../../infraestructure/repositories/book.repository';

export default class ListBooksHandler {
  public static async execute(command: ListBooksCommand): Promise<Book[]> {
    const { name_like, ...rest } = command;

    const keys = Object.keys(rest) as Array<keyof ListBooksCommand & keyof Book>;

    let books: Book[] = await bookRepository.findAll();

    if (name_like) {
      books = books.filter((book) => book.name.toLowerCase().includes(name_like.toLowerCase()));
    }

    return books
      .filter(
        (book) => keys.every(
          (key) => [undefined, book[key].toLowerCase()].includes(command[key]?.toLowerCase()),
        ),
      );
  }
}
