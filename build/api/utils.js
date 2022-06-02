"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var lodash_1 = require("lodash");
var APIUtils = /** @class */ (function () {
    function APIUtils() {
    }
    APIUtils.prototype.sendResponse = function (res, payload, status) {
        if (status === void 0) { status = 200; }
        res.status(status).json(payload);
        return true;
    };
    APIUtils.prototype.sendMethodNotFound = function (req, res, next) {
        (0, lodash_1.noop)(req);
        (0, lodash_1.noop)(next);
        var response = {
            errorCode: 'API_METHOD_NOT_FOUND',
            error: 'Method not found.',
        };
        res.status(400).json(response);
        return true;
    };
    APIUtils.prototype.handleError = function (err, req, res, next) {
        (0, lodash_1.noop)(req);
        (0, lodash_1.noop)(next);
        var response = {
            errorCode: err.code,
            error: err.message,
        };
        res.status(err.statusCode).json(response);
        return false;
    };
    return APIUtils;
}());
exports.default = new APIUtils();
