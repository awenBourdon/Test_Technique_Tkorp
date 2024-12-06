/*
DTO used to create a new animal
in GraphQL
*/

import { InputType, Field, Int, Float } from '@nestjs/graphql';
import {
  IsNotEmpty,
  IsString,
  IsNumber,
  IsDate,
  MaxDate,
} from '@nestjs/class-validator';

@InputType()
export class CreateAnimalInput {
  @Field()
  @IsNotEmpty()
  @IsString()
  name: string;

  @Field()
  @IsNotEmpty()
  @IsDate()
  @MaxDate(new Date())
  dateOfBirth: Date;

  @Field()
  @IsNotEmpty()
  @IsString()
  species: string;

  @Field()
  @IsNotEmpty()
  @IsString()
  breed: string;

  @Field()
  @IsNotEmpty()
  @IsString()
  color: string;

  @Field(() => Float)
  @IsNumber()
  weight: number;

  @Field(() => Int)
  @IsNumber()
  ownerId: number;
}
