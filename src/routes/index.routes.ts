import { Router } from "express";
import echoRoutes from "./echo.routes";
import toolsRoutes from "./tools.routes";

const routes = Router();

routes.use(echoRoutes);
routes.use(toolsRoutes);
routes.get("/", (request, response) => {
  return response.json({
    status: "OK",
  });
});

export default routes;
