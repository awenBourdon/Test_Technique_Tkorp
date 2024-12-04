import { Resolver, Query, Mutation, Args, Int } from '@nestjs/graphql';
import { AnimalService } from './animal.service';
import { Animal } from './entities/animal.entity';
import { CreateAnimalInput } from './dto/create-animal.input';

@Resolver(() => Animal)
export class AnimalResolver {
  constructor(private animalService: AnimalService) {}

  @Mutation(() => Animal)
  async createAnimal(
    @Args('createAnimalInput') CreateAnimalInput: CreateAnimalInput
  ): Promise<Animal> {
    return this.animalService.create(CreateAnimalInput);
  }

  @Query(() => [Animal])
  async animals(): Promise<Animal[]> {
    return this.animalService.findAll();
  }

  @Query(() => Animal)
  async animal(@Args('id', { type: () => Int }) id: number): Promise<Animal> {
    return this.animalService.findOne(id);
  }
}
