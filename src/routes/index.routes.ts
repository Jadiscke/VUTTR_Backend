import { Router } from "express";
import echoRoutes from "./echo.routes";

const routes = Router();

routes.use(echoRoutes);
routes.get("/", (request, response) => {
  return response.json({
    status: "OK",
  });
});

export default routes;
