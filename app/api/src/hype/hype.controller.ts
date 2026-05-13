import { Controller } from '@nestjs/common';
import { HypeService } from './hype.service';

@Controller()
export class HypeController {
  constructor(private readonly hypeService: HypeService) {}
}
