import { Module } from '@nestjs/common';
import { AppController } from '../controllers/app.controller';
import { AppService } from '../services/app.service';
import { OrientationModule } from './orientation.module';
import { RoverModule } from './rover.module';

@Module({
  imports: [OrientationModule, RoverModule],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
