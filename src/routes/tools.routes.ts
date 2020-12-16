import { Router } from "express";
import ToolController from "../controllers/toolsController";
import toolsController from "../controllers/toolsController";

const PATH = "/tools";

const routes = Router();

routes.post(PATH, toolsController.create);
routes.get(PATH, toolsController.getAll);
routes.put(PATH + "/:id", toolsController.updateOne);
routes.delete(PATH + "/:id", toolsController.delete);

export default routes;
