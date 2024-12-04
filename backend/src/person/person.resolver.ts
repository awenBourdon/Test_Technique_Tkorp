import { Resolver, Query, Mutation, Args, Int } from '@nestjs/graphql';
import { PersonService } from './person.service';
import { Person } from './entities/person.entity';
import { CreatePersonInput } from './dto/create-person.input';

@Resolver(() => Person)
export class PersonResolver {
  constructor(private personService: PersonService) {}

  @Mutation(() => Person)
  async createPerson(
    @Args('createPersonInput') CreatePersonInput: CreatePersonInput
  ): Promise<Person> {
    return this.personService.create(CreatePersonInput);
  }

  @Query(() => [Person])
  async persons(): Promise<Person[]> {
    return this.personService.findAll();
  }

  @Query(() => Person)
  async person(@Args('id', { type: () => Int }) id: number): Promise<Person> {
    return this.personService.findOne(id);
  }
}
