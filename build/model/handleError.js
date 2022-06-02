"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var errors_1 = __importDefault(require("~/errors"));
var handleError = function (error) {
    if (error.isCodedError) {
        throw error;
    }
    else {
        throw new errors_1.default('NOT_DEFINED', 500, "Unkwown error.");
    }
};
exports.default = handleError;
