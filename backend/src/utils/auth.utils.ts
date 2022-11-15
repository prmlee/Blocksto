import 'dotenv/config';
import { sign, SignOptions } from 'jsonwebtoken';
import { User } from '../database/entities/user.entity';

const createJWToken = (user: User) => {
  const jwtScreteKey = process.env.JWT_SECRET_KEY;
  const payload = { id: user.id, blockstoId: user.blockstoId };
  const signInOptions: SignOptions = {
    algorithm: 'HS256',
    expiresIn: 30 * 24 * 60 * 60,
  };
  return sign(payload, jwtScreteKey || '', signInOptions);
};

export const AuthUtils = { createJWToken };
