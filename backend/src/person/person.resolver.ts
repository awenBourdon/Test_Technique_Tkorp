/* Defines a GraphQL resolver for managing persons
with queries and mutations to the person.service.
*/

import { Resolver, Query, Mutation, Args, Int } from '@nestjs/graphql';
import { PersonService } from './person.service';
import { Person } from './entities/person.entity';
import { CreatePersonInput } from './dto/create-person.input';
import { UpdatePersonInput } from './dto/update-person.input';
import { NotFoundException } from '@nestjs/common';

@Resolver(() => Person)
export class PersonResolver {
  constructor(private personService: PersonService) {}

  @Query(() => [Person])
  async persons(): Promise<Person[]> {
    try {
      return await this.personService.findAll();
    } catch (error) {
      console.error('Error occurred while fetching all persons:', error);
      throw new Error('Impossible de récupérer tous les propriétaires.');
    }
  }

  @Query(() => Person)
  async person(@Args('id', { type: () => Int }) id: number): Promise<Person> {
    try {
      return await this.personService.findOne(id);
    } catch (error) {
      console.error('Error occurred while fetching the person:', error);
      throw new NotFoundException(`Le propriétaire n° ${id} n'existe pas.`);
    }
  }

  @Mutation(() => Person)
  async createPerson(
    @Args('createPersonInput') createPersonInput: CreatePersonInput,
  ): Promise<Person> {
    try {
      return await this.personService.create(createPersonInput);
    } catch (error) {
      console.error('Error occurred while creating person:', error);
      throw new Error('La création du propriétaire a échouée.');
    }
  }

  @Mutation(() => Person)
  async updatePerson(
    @Args('id', { type: () => Int }) id: number,
    @Args('updatePersonInput') updatePersonInput: UpdatePersonInput,
  ): Promise<Person> {
    try {
      return await this.personService.update(id, updatePersonInput);
    } catch (error) {
      console.error('Error occurred while updating the person:', error);
      throw new Error(
        `Impossible de modifier les informations du propriétaire n° ${id}.`,
      );
    }
  }

  @Mutation(() => Boolean)
  async deletePerson(
    @Args('id', { type: () => Int }) id: number,
  ): Promise<boolean> {
    try {
      return await this.personService.remove(id);
    } catch (error) {
      console.error('Error occurred while deleting the person:', error);
      throw new Error(`Impossible de supprimer le propriétaire n° ${id}.`);
    }
  }
}
