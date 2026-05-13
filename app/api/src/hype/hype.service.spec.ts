import { Test, TestingModule } from '@nestjs/testing';
import { HypeService } from './hype.service';

describe('HypeService', () => {
  let service: HypeService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [HypeService],
    }).compile();

    service = module.get<HypeService>(HypeService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
