/* 
Implements the  logic for managing animals
*/

import { Injectable, NotFoundException } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { Animal } from './entities/animal.entity';
import { CreateAnimalInput } from './dto/create-animal.input';
import { UpdateAnimalInput } from './dto/update-animal.input';

@Injectable()
export class AnimalService {
  constructor(
    @InjectRepository(Animal)
    private animalRepository: Repository<Animal>,
  ) {}

  async create(createAnimalInput: CreateAnimalInput): Promise<Animal> {
    const animal = this.animalRepository.create(createAnimalInput);
    return await this.animalRepository.save(animal);
  }

  async findAll(): Promise<Animal[]> {
    return await this.animalRepository.find({ relations: ['owner'] });
  }

  async findOne(id: number): Promise<Animal> {
    const animal = await this.animalRepository.findOne({
      where: { id },
      relations: ['owner'],
    });

    if (!animal) {
      throw new NotFoundException(`Animal with ID ${id} not found`);
    }

    return animal;
  }

  async update(
    id: number,
    updateAnimalInput: UpdateAnimalInput,
  ): Promise<Animal> {
    const existingAnimal = await this.findOne(id);

    const updatedAnimal = this.animalRepository.merge(
      existingAnimal,
      updateAnimalInput,
    );
    return await this.animalRepository.save(updatedAnimal as Animal);
  }

  async remove(id: number): Promise<boolean> {
    const animal = await this.findOne(id);
    await this.animalRepository.remove(animal);
    return true;
  }
}
