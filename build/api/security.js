"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.rateLimit = exports.checkJwt = void 0;
var express_oauth2_jwt_bearer_1 = require("express-oauth2-jwt-bearer");
var config_1 = __importDefault(require("~/config"));
var security_1 = __importDefault(require("~/constants/security"));
var express_rate_limit_1 = __importDefault(require("express-rate-limit"));
var codes_1 = __importDefault(require("~/errors/codes"));
var checkJwt = (0, express_oauth2_jwt_bearer_1.auth)({
    audience: config_1.default.AUTH0.AUDIENCE,
    issuerBaseURL: config_1.default.AUTH0.ISSUER_BASE_URL,
    tokenSigningAlg: config_1.default.AUTH0.ALGORITHM,
});
exports.checkJwt = checkJwt;
var rateError = function () {
    return JSON.stringify({
        errorCode: codes_1.default.API_REQUESTS_TOO_OFTEN,
        error: "Requests to API are too often.",
    });
};
var rateLimit = (0, express_rate_limit_1.default)({
    windowMs: security_1.default.RATE_LIMIT.WINDOW_MS,
    max: security_1.default.RATE_LIMIT.MAX,
    message: rateError(),
});
exports.rateLimit = rateLimit;
