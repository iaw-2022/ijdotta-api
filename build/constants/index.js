"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var routes_1 = __importDefault(require("./routes"));
var security_1 = __importDefault(require("./security"));
var CONSTANTS = { ROUTES: routes_1.default, SECURITY: security_1.default };
exports.default = CONSTANTS;
