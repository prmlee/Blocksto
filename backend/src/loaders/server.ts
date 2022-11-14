import { Application } from "express";
import { createExpressServer } from "routing-controllers";

export const ExpressServerLoader = (): Application => { 
  const app: Application = createExpressServer({
    cors: true,
    classTransformer: true,
    defaultErrorHandler: false,
    middlewares: [],
    controllers: []
  });

  app.listen(process.env.PORT);

  return app;
}