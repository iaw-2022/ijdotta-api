"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var swagger_jsdoc_1 = __importDefault(require("swagger-jsdoc"));
var swagger_ui_express_1 = __importDefault(require("swagger-ui-express"));
var swagger_1 = __importDefault(require("~/constants/swagger"));
var express_1 = require("express");
var swaggerOptions = {
    swaggerDefinition: {
        info: {
            title: swagger_1.default.API_NAME,
            description: swagger_1.default.DESCRIPTION,
            contact: swagger_1.default.CONTACT,
            servers: ['http://localhost:3000']
        }
    },
    apis: ["~/api/routes.ts"]
};
var swaggerDocs = (0, swagger_jsdoc_1.default)(swaggerOptions);
var swaggerRouter = (0, express_1.Router)();
swaggerRouter.use('/api-docs', swagger_ui_express_1.default.serve, swagger_ui_express_1.default.setup(swaggerDocs));
exports.default = swaggerRouter;
