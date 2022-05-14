import express from "express";

let port = process.env.PORT || 3000;
let app = express();

app.get('/', (req, res, next) => {
    res.send('Hello world!');
})

app.listen(port, () => {
    console.log(`App listening on port ${port}`);
});
