/* 
Implements the  logic for managing persons
*/

import { Injectable, NotFoundException } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { Person } from './entities/person.entity';
import { CreatePersonInput } from './dto/create-person.input';
import { UpdatePersonInput } from './dto/update-person.input';

@Injectable()
export class PersonService {
  constructor(
    @InjectRepository(Person)
    private personRepository: Repository<Person>,
  ) {}

  async create(createPersonInput: CreatePersonInput): Promise<Person> {
    const person = this.personRepository.create(createPersonInput);
    return await this.personRepository.save(person);
  }

  async findAll(): Promise<Person[]> {
    return await this.personRepository.find({ relations: ['animals'] });
  }

  async findOne(id: number): Promise<Person> {
    const person = await this.personRepository.findOne({
      where: { id },
      relations: ['animals'],
    });

    if (!person) {
      throw new NotFoundException(`Person with ID ${id} not found`);
    }

    return person;
  }

  async update(
    id: number,
    updatePersonInput: UpdatePersonInput,
  ): Promise<Person> {
    const existingPerson = await this.findOne(id);
    const updatedPerson = this.personRepository.merge(
      existingPerson,
      updatePersonInput,
    );
    return await this.personRepository.save(updatedPerson as Person);
  }

  async remove(id: number): Promise<boolean> {
    const person = await this.findOne(id);
    await this.personRepository.remove(person);
    return true;
  }
}