import express, { Request, Response, NextFunction } from 'express';
import CONFIG from './config';
import { noop } from 'lodash';
require('~/patch.js');
import api from '~/api/index';

var app = express();

app.use('/api', api);

app.get('/', (req: Request, res: Response, next: NextFunction) => {
  noop(req)
  noop(next)
  res.send('Hello world!');
});

const port = CONFIG.SERVER.PORT;
app.listen(port, () => {
  console.log(`App listening on port ${port}`);
});
