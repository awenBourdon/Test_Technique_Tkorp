import { Entity, PrimaryGeneratedColumn, Column, OneToMany } from 'typeorm';
import { Field, Int, ObjectType } from '@nestjs/graphql';
import { Animal } from '../../animal/entities/animal.entity';

@Entity()
@ObjectType()
export class Person {
  @PrimaryGeneratedColumn()
  @Field(() => Int)
  id: number;

  @Column()
  @Field()
  lastName: string;

  @Column()
  @Field()
  firstName: string;

  @Column()
  @Field()
  email: string;

  @Column()
  @Field()
  phoneNumber: string;

  @OneToMany(() => Animal, (animal) => animal.owner)
  @Field(() => [Animal], { nullable: true })
  animals?: Animal[];
}
