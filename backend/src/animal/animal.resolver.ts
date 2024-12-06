/* Defines a GraphQL resolver for managing animals
with queries and mutations to the animal.service.
*/

import { Resolver, Query, Mutation, Args, Int } from '@nestjs/graphql';
import { AnimalService } from './animal.service';
import { Animal } from './entities/animal.entity';
import { CreateAnimalInput } from './dto/create-animal.input';
import { UpdateAnimalInput } from './dto/update-animal.input';
import { NotFoundException } from '@nestjs/common';

@Resolver(() => Animal)
export class AnimalResolver {
  constructor(private readonly animalService: AnimalService) {}

  @Query(() => [Animal])
  async animals(): Promise<Animal[]> {
    try {
      return await this.animalService.findAll();
    } catch (error) {
      console.error('Error occurred while fetching animals:', error);
      throw new Error('Impossible de récupérer tous les animaux.');
    }
  }

  @Query(() => Animal)
  async animal(@Args('id', { type: () => Int }) id: number): Promise<Animal> {
    try {
      return await this.animalService.findOne(id);
    } catch (error) {
      console.error('Error occurred while fetching the animal:', error);
      throw new NotFoundException(`L'animal n° ${id} n'existe pas.`);
    }
  }

  @Mutation(() => Animal)
  async createAnimal(
    @Args('createAnimalInput') createAnimalInput: CreateAnimalInput,
  ): Promise<Animal> {
    try {
      return await this.animalService.create(createAnimalInput);
    } catch (error) {
      console.error('Error occurred while creating the animal:', error);
      throw new Error(`La création de l'animal a échouée.`);
    }
  }

  @Mutation(() => Animal)
  async updateAnimal(
    @Args('id', { type: () => Int }) id: number,
    @Args('updateAnimalInput') updateAnimalInput: UpdateAnimalInput,
  ): Promise<Animal> {
    try {
      return await this.animalService.update(id, updateAnimalInput);
    } catch (error) {
      console.error('Error occurred while updating the animal:', error);
      throw new Error(
        `Impossible de modifier les informations de l animal n° ${id}.`,
      );
    }
  }

  @Mutation(() => Boolean)
  async deleteAnimal(
    @Args('id', { type: () => Int }) id: number,
  ): Promise<boolean> {
    try {
      return await this.animalService.remove(id);
    } catch (error) {
      console.error('Error occurred while deleting the animal:', error);
      throw new Error(`Impossible de supprimer l'animal n° ${id}.`);
    }
  }
}