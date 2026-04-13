import { Injectable } from '@nestjs/common';
import { CreateCifraDto } from './dto/create-cifra.dto';
import { UpdateCifraDto } from './dto/update-cifra.dto';

@Injectable()
export class CifraService {
  create(createCifraDto: CreateCifraDto) {
    return 'This action adds a new cifra';
  }

  findAll() {
    return `This action returns all cifra`;
  }

  findOne(id: number) {
    return `This action returns a #${id} cifra`;
  }

  update(id: number, updateCifraDto: UpdateCifraDto) {
    return `This action updates a #${id} cifra`;
  }

  remove(id: number) {
    return `This action removes a #${id} cifra`;
  }
}
