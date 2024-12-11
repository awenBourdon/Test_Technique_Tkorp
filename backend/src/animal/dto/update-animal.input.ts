/*
DTO used to update animal
in GraphQL
*/

import { InputType, Field, Int, Float, PartialType } from '@nestjs/graphql';
import { CreateAnimalInput } from './create-animal.input';

@InputType()
export class UpdateAnimalInput extends PartialType(CreateAnimalInput) {
  @Field({ nullable: true })
  name?: string;

  @Field({ nullable: true })
  dateOfBirth?: Date;

  @Field({ nullable: true })
  species?: string;

  @Field({ nullable: true })
  breed?: string;

  @Field({ nullable: true })
  color?: string;

  @Field(() => Float)
  weight?: number;

  @Field(() => Int, { nullable: true })
  ownerId?: number;
}
