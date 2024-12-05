/* 
Defines the Animal entity, which maps the animal table
in the database and simultaneously acts as a GraphQL type
for querying and mutating animal-related data.
*/

import {
  Entity,
  PrimaryGeneratedColumn,
  Column,
  ManyToOne,
  JoinColumn,
} from 'typeorm';
import { Field, Int, Float, ObjectType } from '@nestjs/graphql';
import { Person } from '../../person/entities/person.entity';

// @Entity marks as a database table managed by TypeORM
@Entity()
// @ObjectType Indicates that this class is also a GraphQL type
@ObjectType()
export class Animal {
  @PrimaryGeneratedColumn()
  @Field(() => Int)
  id: number;

  // @Column maps a class property to a column in the database
  @Column()
  // @Field exposes a class property as a field in GraphQL
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

  @ManyToOne(() => Person, (person) => person.animals)
  @JoinColumn({ name: 'ownerId' })
  @Field(() => Person)
  owner: Person;
}
