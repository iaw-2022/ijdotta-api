"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var express_1 = __importDefault(require("express"));
var port = process.env.PORT || 3000;
var app = (0, express_1.default)();
app.get('/', function (req, res, next) {
    res.send('Hello world!');
});
app.listen(port, function () {
    console.log("App listening on port ".concat(port));
});