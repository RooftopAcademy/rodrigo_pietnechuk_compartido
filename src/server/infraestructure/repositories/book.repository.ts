import type Book from '../../domain/entities/book.entity';
import type RepositoryInterface from '../interfaces/RepositoryInterface';
import bookData from '../data/catalog.json';

class BookRepository implements RepositoryInterface<Book> {
  private book: Book[];

  public constructor() {
    this.book = bookData;
  }

  public async findOneById(id: string): Promise<Book | null> {
    const book: Book | undefined = this.book.find((b) => b.id == id);

    return book || null;
  }

  public async findAll(): Promise<Book[]> {
    return this.book;
  }
}

export default new BookRepository();
