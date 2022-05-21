import express, { Request, Response, NextFunction } from "express";
require('~/patch.js')
import api from '~/api/index';

let port = process.env.PORT || 3000;
var app = express();

app.use('/api', api);

app.get("/", (req: Request, res: Response, next: NextFunction) => {
    res.send("Hello world!");
});

app.listen(port, () => {
    console.log(`App listening on port ${port}`);
});