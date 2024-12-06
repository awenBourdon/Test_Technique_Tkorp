/*
DTO used to update person
in GraphQL
*/

import { InputType, Field, PartialType } from '@nestjs/graphql';
import { CreatePersonInput } from './create-person.input';
import { IsOptional } from '@nestjs/class-validator';

@InputType()
export class UpdatePersonInput extends PartialType(CreatePersonInput) {
  @Field({ nullable: true })
  @IsOptional()
  lastName?: string;

  @Field({ nullable: true })
  @IsOptional()
  firstName?: string;

  @Field({ nullable: true })
  @IsOptional()
  email?: string;

  @Field({ nullable: true })
  @IsOptional()
  phoneNumber?: string;
}
