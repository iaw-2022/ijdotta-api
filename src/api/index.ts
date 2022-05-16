import bodyParser from "body-parser";
import { Router } from "express";
import routes from "./routes";

const router = Router();

const parser = bodyParser.json();
router.use(parser);

router.use(routes);

export default router;