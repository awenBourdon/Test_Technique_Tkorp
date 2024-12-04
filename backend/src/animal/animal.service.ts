import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { Animal } from './entities/animal.entity';
import { CreateAnimalInput } from './dto/create-animal.input';

@Injectable()
export class AnimalService {
  constructor(
    @InjectRepository(Animal)
    private animalRepository: Repository<Animal>,
  ) {}

  async create(CreateAnimalInput: CreateAnimalInput): Promise<Animal> {
    const animal = this.animalRepository.create(CreateAnimalInput);
    return await this.animalRepository.save(animal);
  }

  async findAll(): Promise<Animal[]> {
    return await this.animalRepository.find({ relations: ['owner'] });
  }

  async findOne(id: number): Promise<Animal> {
    return await this.animalRepository.findOne({
      where: { id },
      relations: ['owner'],
    });
  }
}
