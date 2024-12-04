import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { AnimalService } from './animal.service';
import { AnimalResolver } from './animal.resolver';
import { Animal } from './entities/animal.entity';

@Module({
  imports: [TypeOrmModule.forFeature([Animal])],
  providers: [AnimalService, AnimalResolver],
  exports: [AnimalService],
})
export class AnimalModule {}
