import { Column, Entity, JoinColumn, ManyToOne, PrimaryGeneratedColumn } from 'typeorm';
import { User } from './user.entity';

@Entity('notebooks')
export class Notebook {
  @PrimaryGeneratedColumn('uuid')
  id: string;

  @Column({ name: 'address', length: 100 })
  address: string;

  @Column({ name: 'lat', type: 'float', default: 0.0 })
  lat: number;

  @Column({ name: 'lng', type: 'float', default: 0.0 })
  lng: number;

  @Column({ name: 'type', type: 'int', default: 0 })
  type: number;

  @Column({ name: 'square', type: 'float', default: 0 })
  square: number;

  @Column({ name: 'condom', type: 'int', default: 0 })
  condom: number;

  @Column('timestamp', { name: 'constructDate' })
  constructDate: Date;

  @Column({ name: 'ecdlevel', type: 'int', default: 0 })
  ecdlevel: number;

  @Column({ name: 'additionalInfo', type: 'text', nullable: true })
  additionalInfo: string;

  @ManyToOne(() => User, (u) => u.id)
  @JoinColumn({ name: 'owner_id' })
  owner: User;
}
