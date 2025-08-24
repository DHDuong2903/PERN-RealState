import authRoute from "./auth.route.js";
import { notFound, errorHandler } from "../middlewares/error.handler.js";

const initRoutes = (app) => {
  app.use("/api/auth", authRoute);

  app.use(notFound);
  app.use(errorHandler);
};

export default initRoutes;
