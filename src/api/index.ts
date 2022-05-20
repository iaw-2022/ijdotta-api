import bodyParser from "body-parser";
import { Router } from "express";
import routes from "./routes";
import apiUtils from "~/api/utils"
import ROUTES from "~/constants/routes";
import swaggerUI, { SwaggerOptions } from 'swagger-ui-express'
import swaggerJSDoc from "swagger-jsdoc";
import SWAGGER from "~/constants/swagger";

const router = Router();

const parser = bodyParser.json();
router.use(parser);

/**
 * Documentation
 */
 const swaggerOptions: SwaggerOptions = {
    swaggerDefinition: {
        info: {
            title: SWAGGER.API_NAME,
            description: SWAGGER.DESCRIPTION,
            contact: SWAGGER.CONTACT,
            servers: ['http://localhost:3000']
        }
    },
    // apis: ['build/index.js']
    apis: ["build/api/routes.*"]
}

const swaggerDocs = swaggerJSDoc(swaggerOptions);
router.use(ROUTES.DOCS, swaggerUI.serve, swaggerUI.setup(swaggerDocs))

/**
 * API routes
 */
router.use(routes);

/**
 * Error handling
 */
router.all('*', apiUtils.sendMethodNotFound);
router.use(apiUtils.handleError);

export default router;