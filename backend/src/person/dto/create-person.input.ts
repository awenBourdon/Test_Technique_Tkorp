/*
DTO used to create a new person
in GraphQL
*/

import { InputType, Field } from '@nestjs/graphql';
import { IsEmail, IsNotEmpty, IsString } from '@nestjs/class-validator';

@InputType()
export class CreatePersonInput {
  @Field()
  @IsNotEmpty()
  @IsString()
  lastName: string;

  @Field()
  @IsNotEmpty()
  @IsString()
  firstName: string;

  @Field()
  @IsEmail()
  @IsNotEmpty()
  email: string;

  @Field()
  @IsNotEmpty()
  @IsString()
  phoneNumber: string;
}
