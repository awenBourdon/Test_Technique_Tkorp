/* 
Defines the Animal entity, which maps the person table
in the database and simultaneously acts as a GraphQL type
for querying and mutating person-related data.
*/

import { Entity, PrimaryGeneratedColumn, Column, OneToMany } from 'typeorm';
import { Field, Int, ObjectType } from '@nestjs/graphql';
import { Animal } from '../../animal/entities/animal.entity';
import { IsNotEmpty } from '@nestjs/class-validator';

// @Entity marks as a database table managed by TypeORM
@Entity()
// @ObjectType Indicates that this class is also a GraphQL type
@ObjectType()
export class Person {
  @PrimaryGeneratedColumn()
  @Field(() => Int)
  id: number;

  // @Column maps a class property to a column in the database
  @Column()
  // @Field exposes a class property as a field in GraphQL
  @Field()
  @IsNotEmpty()
  lastName: string;

  @Column()
  @Field()
  @IsNotEmpty()
  firstName: string;

  @Column()
  @Field()
  @IsNotEmpty()
  email: string;

  @Column()
  @Field()
  @IsNotEmpty()
  phoneNumber: string;

  @OneToMany(() => Animal, (animal) => animal.owner)
  @Field(() => [Animal], { nullable: true })
  animals?: Animal[];
}
