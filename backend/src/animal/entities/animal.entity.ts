import {
  Entity,
  PrimaryGeneratedColumn,
  Column,
  ManyToOne,
  JoinColumn,
} from 'typeorm';
import { Field, Int, Float, ObjectType } from '@nestjs/graphql';
import { Person } from '../../person/entities/person.entity';

@Entity()
@ObjectType()
export class Animal {
  @PrimaryGeneratedColumn()
  @Field(() => Int)
  id: number;

  @Column()
  @Field()
  name: string;

  @Column()
  @Field()
  dateOfBirth: Date;

  @Column()
  @Field()
  species: string;

  @Column()
  @Field()
  breed: string;

  @Column()
  @Field()
  color: string;

  @Column('float')
  @Field(() => Float)
  weight: number;

  @Column()
  @Field(() => Int)
  ownerId: number;

  @ManyToOne(() => Person, person => person.animals)
  @JoinColumn({ name: 'ownerId' })
  @Field(() => Person)
  owner: Person;
}
