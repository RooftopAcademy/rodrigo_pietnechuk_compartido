import { log } from 'debug';
import dotenv from 'dotenv';
import express from 'express';

dotenv.config();

const app: express.Application = express();

app.use(express.static('dist'));

const port: string = process.env.PORT || '3000';
app.listen(port, () => {
  log(`Listening at port ${port}`);
});
