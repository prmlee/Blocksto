import { AppDataSource } from '../database/data-source';
import { Notebook } from '../database/entities/notebook.entity';
import { User } from '../database/entities/user.entity';

const findByOwner = async (
  user: User,
  skip: number = 0,
  take: number = 10,
): Promise<[Notebook[], number]> => {
  const notebooks = await AppDataSource.getRepository(Notebook).findAndCount({
    where: {
      owner: { id: user.id },
    },
    relations: ['owner'],
    skip,
    take,
  });
  return notebooks;
};

const save = async (notebook: Notebook): Promise<Notebook> => {
  const savedNotebook: Notebook = await AppDataSource.manager.save(notebook);
  return savedNotebook;
};

export const NotebookService = { findByOwner, save };
