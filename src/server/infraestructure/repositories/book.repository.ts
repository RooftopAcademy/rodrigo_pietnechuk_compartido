import type Book from '../../domain/entities/book.entity';
import type RepositoryInterface from '../interfaces/RepositoryInterface';
import bookData from '../data/catalog.json';

class BookRepository implements RepositoryInterface<Book> {
  private books: Book[];

  public constructor() {
    this.books = bookData;
  }

  public async findOneById(id: string): Promise<Book | null> {
    const book: Book | undefined = this.books.find((b) => b.id == id);

    return book || null;
    return book ?? null;
  }

  public async findAll(): Promise<Book[]> {
    return this.books;
  }
}

export default new BookRepository();
