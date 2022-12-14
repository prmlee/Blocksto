import { Column, Entity, OneToMany, PrimaryGeneratedColumn } from 'typeorm';
import { Notebook } from './notebook.entity';

@Entity('users')
export class User {
  @PrimaryGeneratedColumn('uuid')
  id: string;

  @Column({ name: 'firstname', length: 50 })
  firstname: string;

  @Column({ name: 'lastname', length: 50 })
  lastname: string;

  @Column({ name: 'particular', default: false })
  particular: boolean;

  @Column({ name: 'professional', default: false })
  professional: boolean;

  @Column({ name: 'buildingType', default: 1, type: 'int' })
  buildingType: number;

  @Column({ name: 'companyName', length: 100 })
  companyName: string;

  @Column({ name: 'sirenNumber', nullable: false })
  sirenNumber: string;

  @Column({ name: 'address', length: 300 })
  address: string;

  @Column({ name: 'email', length: 100, unique: true })
  email: string;

  @Column({ name: 'blockstoId', length: 50, unique: true })
  blockstoId: string;

  @Column({ name: 'blockstoPassword', length: 50 })
  blockstoPassword: string;

  @Column({ name: 'avatar', length: 300, nullable: true })
  avatar: string;

  @OneToMany(() => Notebook, (n) => n.owner)
  notebooks: Notebook[];
}
