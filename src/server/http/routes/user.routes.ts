import { Application } from 'express';
import ListUsersAction from '../actions/users/list.users.action';
import FindUserByIdAction from '../actions/users/find.user.by.id.action';
import CommonRoutes from './common.routes';

export default class UserRoutes extends CommonRoutes {
  public constructor(app: Application) {
    super(app, 'User');
  }

  public setUpRoutes(): Application {
    this.app.get('/api/users', ListUsersAction.run);

    this.app.get('/api/users/:id', FindUserByIdAction.run);

    return this.app;
  }
}
