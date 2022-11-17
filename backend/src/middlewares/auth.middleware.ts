import 'dotenv/config';
import { Request, Response } from 'express';
import httpStatus from 'http-status';
import { ExpressMiddlewareInterface } from 'routing-controllers';
import jwt from 'jsonwebtoken';
import { UserService } from '../services/user.service';

export class AuthMiddleware implements ExpressMiddlewareInterface {
  use(request: Request, response: Response, next: (err?: any) => any) {
    try {
      const jwtoken = request.headers.authorization?.split(' ')[1];
      const jwtScreteKey = process.env.JWT_SECRET_KEY;
      const decodedToken = jwt.verify(jwtoken, jwtScreteKey || '').toString();
      const user = UserService.findByUUId(JSON.parse(decodedToken).id);

      if (user) {
        response.locals.user = user;
        next();
      } else {
        response.status(httpStatus.UNAUTHORIZED).json({ message: 'Unauthorized' });
        return;
      }
    } catch (error) {
      response.status(httpStatus.UNAUTHORIZED).json({ message: 'Unauthorized' });
      return;
    }
  }
}
