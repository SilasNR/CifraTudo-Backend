import { Test, TestingModule } from '@nestjs/testing';
import { CifraService } from './cifra.service';

describe('CifraService', () => {
  let service: CifraService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [CifraService],
    }).compile();

    service = module.get<CifraService>(CifraService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
