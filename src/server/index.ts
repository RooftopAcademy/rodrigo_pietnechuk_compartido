import path from 'path';
import { log } from 'debug';
import dotenv from 'dotenv';
import express, { Request, Response } from 'express';
import type CommonRoutes from './http/routes/common.routes';
import BookRoutes from './http/routes/book.routes';
import UserRoutes from './http/routes/user.routes';

dotenv.config();

const app: express.Application = express();

app.use('/static', express.static(path.resolve('dist', 'static')));

app.get('/', (_req: Request, res: Response): void => {
  res.sendFile(path.resolve('dist', 'index.html'));
});

const routes: CommonRoutes[] = [new BookRoutes(app), new UserRoutes(app)];

const port: string = process.env.PORT || '3000';

app.listen(port, () => {
  routes.forEach((route: CommonRoutes) => {
    log(`Routes configured for ${route.getName()}`);
  });

  log(`Listening at port ${port}`);
});
