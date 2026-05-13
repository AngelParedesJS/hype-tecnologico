import { Module } from '@nestjs/common';
import { HypeService } from './hype.service';
import { HypeController } from './hype.controller';

@Module({
  controllers: [HypeController],
  providers: [HypeService],
})
export class HypeModule {}
