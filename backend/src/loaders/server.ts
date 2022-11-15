import { Application } from 'express';
import { createExpressServer } from 'routing-controllers';
import { UserController } from '../controllers/user.controller';

export const ExpressServerLoader = (): Application => {
  const app: Application = createExpressServer({
    cors: true,
    classTransformer: true,
    defaultErrorHandler: false,
    middlewares: [],
    controllers: [UserController],
  });

  app.listen(process.env.PORT);

  return app;
};
