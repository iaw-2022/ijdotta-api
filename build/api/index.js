"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var body_parser_1 = __importDefault(require("body-parser"));
var express_1 = require("express");
var routes_1 = __importDefault(require("./routes"));
var utils_1 = __importDefault(require("~/api/utils"));
var constants_1 = __importDefault(require("~/constants"));
var swagger_ui_express_1 = __importDefault(require("swagger-ui-express"));
var yamljs_1 = __importDefault(require("yamljs"));
var cors_1 = __importDefault(require("cors"));
var security_1 = require("./security");
var ROUTES = constants_1.default.ROUTES;
var router = (0, express_1.Router)();
/**
 * Utilities
 */
var parser = body_parser_1.default.json();
router.use(parser);
/**
 * Security
 */
router.use((0, cors_1.default)());
router.use(security_1.rateLimit);
/**
 * Documentation
 */
var swaggerDocument = yamljs_1.default.load('build/api/swagger/swagger.yaml');
router.use(ROUTES.DOCS, swagger_ui_express_1.default.serve, swagger_ui_express_1.default.setup(swaggerDocument));
/**
 * API routes
 */
router.use(routes_1.default);
/**
 * Error handling
 */
router.all('*', utils_1.default.sendMethodNotFound);
router.use(utils_1.default.handleError);
exports.default = router;
