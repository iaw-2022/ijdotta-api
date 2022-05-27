import bodyParser from "body-parser";
import { Router } from "express";
import routes from "./routes";
import apiUtils from "~/api/utils"
import ROUTES from "~/constants/routes";
import swaggerUI from 'swagger-ui-express'
import YAML from "yamljs";

const router = Router();

const parser = bodyParser.json();
router.use(parser);

/**
 * Documentation
 */
const swaggerDocument = YAML.load('build/api/swagger/swagger.yaml');
router.use(ROUTES.DOCS, swaggerUI.serve, swaggerUI.setup(swaggerDocument))

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