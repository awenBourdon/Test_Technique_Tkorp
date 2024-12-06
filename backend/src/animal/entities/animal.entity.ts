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
import { IsNotEmpty, MaxDate, Min } from '@nestjs/class-validator';

// @Entity marks as a database table managed by TypeORM
@Entity()
// @ObjectType Indicates that this class is also a GraphQL type
@ObjectType()
export class Animal {
  @PrimaryGeneratedColumn()
  @Field(() => Int)
  id: number;

  @Column()
  @Field()
  @IsNotEmpty()
  name: string;

  @Column()
  @Field()
  @IsNotEmpty()
  @MaxDate(new Date())
  dateOfBirth: Date;

  @Column()
  @Field()
  @IsNotEmpty()
  species: string;

  @Column()
  @Field()
  @IsNotEmpty()
  breed: string;

  @Column()
  @Field()
  @IsNotEmpty()
  color: string;

  @Column('float')
  @Field(() => Float)
  @Min(0)
  @IsNotEmpty()
  weight: number;

  @Column()
  @Field(() => Int)
  @IsNotEmpty()
  ownerId: number;

  @ManyToOne(() => Person, (person) => person.animals)
  @JoinColumn({ name: 'ownerId' })
  @Field(() => Person)
  @IsNotEmpty()
  owner: Person;
}
