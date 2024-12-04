import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { Person } from './entities/person.entity';
import { CreatePersonInput } from './dto/create-person.input';
import { UpdatePersonInput } from './dto/update-person.input';

@Injectable()
export class PersonService {
  remove(id: number): boolean | PromiseLike<boolean> {
    throw new Error('Method not implemented.');
  }
  
  update(
    id: number,
    updatePersonInput: UpdatePersonInput,
  ): Person | PromiseLike<Person> {
    throw new Error('Method not implemented.');
  }
  constructor(
    @InjectRepository(Person)
    private personRepository: Repository<Person>,
  ) {}

  async create(CreatePersonInput: CreatePersonInput): Promise<Person> {
    const person = this.personRepository.create(CreatePersonInput);
    return await this.personRepository.save(person);
  }

  async findAll(): Promise<Person[]> {
    return await this.personRepository.find({ relations: ['animals'] });
  }

  async findOne(id: number): Promise<Person> {
    return await this.personRepository.findOne({ 
      where: { id }, 
      relations: ['animals'] 
    });
  }
}
