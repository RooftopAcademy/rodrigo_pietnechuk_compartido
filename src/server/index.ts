import path from 'path';
import { log } from 'debug';
import dotenv from 'dotenv';
import express, { Request, Response } from 'express';

dotenv.config();

const app: express.Application = express();

app.use('/static', express.static(path.resolve('dist', 'static')));

app.get('/', (_req: Request, res: Response): void => {
  res.sendFile(path.resolve('dist', 'index.html'));
});

const port: string = process.env.PORT || '3000';
app.listen(port, () => {
  log(`Listening at port ${port}`);
});
