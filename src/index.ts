import express, {Request, Response, NextFunction} from "express";

let port = process.env.PORT || 3000;
var app = express();

app.get('/', (req: Request, res: Response, next: NextFunction) => {
    res.send('Hello world!');
})

app.listen(port, () => {
    console.log(`App listening on port ${port}`);
});
