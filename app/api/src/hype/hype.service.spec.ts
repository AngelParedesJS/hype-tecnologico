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

  describe('getHype', () => {
    it('should return an array of videos', () => {
      const result = service.getHype();
      expect(Array.isArray(result)).toBe(true);
      expect(result.length).toBeGreaterThan(0);
    });

    it('should have Hype score of 0 when views are 0', () => {
      const result = service.getHype();
      result.forEach((video) => {
        if (video.video.statistics.viewCount === '0') {
          expect(video.Hype).toBe(0);
        }
      });
    });

    it('should transform thumbnail URLs to placehold.co', () => {
      const result = service.getHype();
      result.forEach((video) => {
        expect(video.video.snippet.thumbnails.high.url).toContain('placehold.co');
      });
    });

    it('should include FriendlyDate for each video', () => {
      const result = service.getHype();
      result.forEach((video) => {
        expect(video.FriendlyDate).toBeDefined();
        expect(typeof video.FriendlyDate).toBe('string');
      });
    });
  });
});