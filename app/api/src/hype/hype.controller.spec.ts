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

  describe('getHype', () => {
    it('should return an array of video data', () => {
      const result = controller.getHype();
      expect(Array.isArray(result)).toBe(true);
      expect(result.length).toBeGreaterThan(0);
    });

    it('should return videos with expected structure', () => {
      const result = controller.getHype();
      const firstVideo = result[0];
      expect(firstVideo).toHaveProperty('video');
      expect(firstVideo).toHaveProperty('FriendlyDate');
      expect(firstVideo).toHaveProperty('Hype');
    });
  });
});