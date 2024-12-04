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
  email: string;

  @Field()
  @IsNotEmpty()
  @IsString()
  phoneNumber: string;
}