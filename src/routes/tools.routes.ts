import { Router } from "express";
import ToolController from "../controllers/toolsController";
import toolsController from "../controllers/toolsController";

const PATH = "/tools";

const routes = Router();

routes.get(PATH, toolsController.getAll);

export default routes;
