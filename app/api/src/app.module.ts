import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { HypeModule } from './hype/hype.module';
import { HypeModule } from './hype/hype.module';

@Module({
  imports: [HypeModule],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
