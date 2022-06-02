/// <reference types="express" />
declare const checkJwt: import("express").Handler;
declare const rateLimit: import("express-rate-limit").RateLimitRequestHandler;
export { checkJwt, rateLimit };
