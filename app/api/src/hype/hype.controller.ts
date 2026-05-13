import { Controller, Get } from '@nestjs/common';
import { HypeService } from './hype.service';

@Controller('api')
export class HypeController {
  constructor(private readonly hypeService: HypeService) {}

  @Get('videos')
  getHype() {
    return this.hypeService.getHype();
  }
}
