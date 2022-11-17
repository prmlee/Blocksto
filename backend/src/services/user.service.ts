import { AppDataSource } from '../database/data-source';
import { User } from '../database/entities/user.entity';

const findByUUId = async (id: string): Promise<User | null> => {
  const user = await AppDataSource.manager.findOneBy(User, { id });
  return user;
};

const findByIdAndPassword = async (
  blockstoId: string,
  blockstoPassword: string,
): Promise<User | null> => {
  const user = await AppDataSource.manager.findOneBy(User, { blockstoId, blockstoPassword });
  return user;
};

const save = async (user: User): Promise<User> => {
  const savedUser: User = await AppDataSource.manager.save(user);
  return savedUser;
};

export const UserService = { findByUUId, findByIdAndPassword, save };
