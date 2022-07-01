"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var express_1 = __importDefault(require("express"));
var config_1 = __importDefault(require("./config"));
var lodash_1 = require("lodash");
require('~/patch.js');
var index_1 = __importDefault(require("~/api/index"));
var app = (0, express_1.default)();
app.use('/api', index_1.default);
app.get('/', function (req, res, next) {
    (0, lodash_1.noop)(req);
    (0, lodash_1.noop)(next);
    res.send('Hello world!');
});
var port = config_1.default.SERVER.PORT;
app.listen(port, function () {
    console.log("App listening on port ".concat(port));
});
