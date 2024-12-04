import { Resolver, Query, Mutation, Args, Int } from '@nestjs/graphql';
import { AnimalService } from './animal.service';
import { Animal } from './entities/animal.entity';
import { CreateAnimalInput } from './dto/create-animal.input';
import { UpdateAnimalInput } from './dto/update-animal.input';

@Resolver(() => Animal)
export class AnimalResolver {
  constructor(private animalService: AnimalService) {}

  @Query(() => [Animal])
  async animals(): Promise<Animal[]> {
    return this.animalService.findAll();
  }

  @Query(() => Animal)
  async animal(@Args('id', { type: () => Int }) id: number): Promise<Animal> {
    return this.animalService.findOne(id);
  }

  @Mutation(() => Animal)
  async createAnimal(
    @Args('createAnimalInput') createAnimalInput: CreateAnimalInput,
  ): Promise<Animal> {
    return this.animalService.create(createAnimalInput);
  }

  @Mutation(() => Animal)
  async updateAnimal(
    @Args('id', { type: () => Int }) id: number,
    @Args('updateAnimalInput') updateAnimalInput: UpdateAnimalInput,
  ): Promise<Animal> {
    return this.animalService.update(id, updateAnimalInput);
  }

  @Mutation(() => Boolean)
  async deleteAnimal(
    @Args('id', { type: () => Int }) id: number,
  ): Promise<boolean> {
    return this.animalService.remove(id);
  }
}