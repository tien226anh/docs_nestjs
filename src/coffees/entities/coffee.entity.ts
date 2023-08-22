import {
  Column,
  Entity,
  JoinTable,
  ManyToMany,
  PrimaryGeneratedColumn,
} from 'typeorm';
import { Flavor } from './flavor.entity';

@Entity()
export class Coffee {
  @PrimaryGeneratedColumn('uuid')
  id: string;

  @Column()
  name: string;

  @Column()
  brand: string;

  @Column({ default: 0 })
  recommendations: number;

  @JoinTable()
  @ManyToMany(
    // eslint-disable-next-line @typescript-eslint/no-unused-vars
    (type) => Flavor,
    (flavor) => flavor.coffees,
    {
      cascade: true, // ['insert']
    },
  )
  flavors: Flavor[];
}
