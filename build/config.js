"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var CONFIG = {
    SERVER: {
        PORT: process.env.PORT || 3000,
    },
    AUTH0: {
        AUDIENCE: process.env.AUDIENCE,
        ISSUER_BASE_URL: process.env.ISSUER_BASE_URL,
        EMAIL_NAMESPACE: process.env.AUDIENCE + 'email',
        ALGORITHM: 'RS256',
    },
};
exports.default = CONFIG;
