/*
DTO used to update animal
in GraphQL
*/

import { InputType, Field, Int, Float, PartialType } from '@nestjs/graphql';
import { CreateAnimalInput } from './create-animal.input';
import { IsOptional } from '@nestjs/class-validator';

@InputType()
export class UpdateAnimalInput extends PartialType(CreateAnimalInput) {
  @Field({ nullable: true })
  @IsOptional()
  name?: string;

  @Field({ nullable: true })
  @IsOptional()
  dateOfBirth?: Date;

  @Field({ nullable: true })
  @IsOptional()
  species?: string;

  @Field({ nullable: true })
  @IsOptional()
  breed?: string;

  @Field({ nullable: true })
  @IsOptional()
  color?: string;

  @Field(() => Int, { nullable: true })
  @IsOptional()
  weight?: number;

  @Field(() => Int, { nullable: true })
  @IsOptional()
  ownerId?: number;
}
