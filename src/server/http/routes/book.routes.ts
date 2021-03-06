import { Application } from 'express';
import ListBooksAction from '../actions/book/list.books.action';
import FindRandomBook from '../actions/book/find.random.book.action';
import FindBookByIdAction from '../actions/book/find.book.by.id.action';
import CommonRoutes from './common.routes';

export default class BookRoutes extends CommonRoutes {
  public constructor(app: Application) {
    super(app, 'Catalog');
  }

  public setUpRoutes(): Application {
    this.app.get('/api/catalog', ListBooksAction.run);

    this.app.get('/api/catalog/random', FindRandomBook.run);

    this.app.get('/api/catalog/:id', FindBookByIdAction.run);

    return this.app;
  }
}
