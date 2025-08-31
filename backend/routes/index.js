import authRoute from "./auth.route.js";
import userRoute from "./user.route.js";
import { notFound, errorHandler } from "../middlewares/error.handler.js";

const initRoutes = (app) => {
  app.use("/api/v1/auth", authRoute);
  app.use("/api/v1/user", userRoute);

  app.use(notFound);
  app.use(errorHandler);
};

export default initRoutes;
