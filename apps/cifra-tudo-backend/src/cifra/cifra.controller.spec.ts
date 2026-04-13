import { Test, TestingModule } from '@nestjs/testing';
import { CifraController } from './cifra.controller';
import { CifraService } from './cifra.service';

describe('CifraController', () => {
  let controller: CifraController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [CifraController],
      providers: [CifraService],
    }).compile();

    controller = module.get<CifraController>(CifraController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
