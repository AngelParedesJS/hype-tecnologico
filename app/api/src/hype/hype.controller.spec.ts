import { Test, TestingModule } from '@nestjs/testing';
import { HypeController } from './hype.controller';
import { HypeService } from './hype.service';

describe('HypeController', () => {
  let controller: HypeController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [HypeController],
      providers: [HypeService],
    }).compile();

    controller = module.get<HypeController>(HypeController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
