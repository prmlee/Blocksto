import { AppDataSource } from "../database/data-source";
import { User } from "../database/entities/user.entity";

const save = async (user: User): Promise<User> => { 
  const savedUser: User = await AppDataSource.manager.save(user);
  return savedUser;
}

export const UserService = { save };