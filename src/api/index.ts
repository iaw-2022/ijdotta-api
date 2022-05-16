import bodyParser from "body-parser";
import { Router } from "express";
import routes from "./routes";
import apiUtils from "~/api/utils"

const router = Router();

const parser = bodyParser.json();
router.use(parser);

router.use(routes);

/**
 * Error handling
 */
router.all('*', apiUtils.sendMethodNotFound);
router.use(apiUtils.handleError);

export default router;