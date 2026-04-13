import { Controller, Get, Post, Body, Patch, Param, Delete } from '@nestjs/common';
import { CifraService } from './cifra.service';
import { CreateCifraDto } from './dto/create-cifra.dto';
import { UpdateCifraDto } from './dto/update-cifra.dto';

@Controller('cifra')
export class CifraController {
  constructor(private readonly cifraService: CifraService) {}

  @Post()
  create(@Body() createCifraDto: CreateCifraDto) {
    return this.cifraService.create(createCifraDto);
  }

  @Get()
  findAll() {
    return this.cifraService.findAll();
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.cifraService.findOne(+id);
  }

  @Patch(':id')
  update(@Param('id') id: string, @Body() updateCifraDto: UpdateCifraDto) {
    return this.cifraService.update(+id, updateCifraDto);
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.cifraService.remove(+id);
  }
}
