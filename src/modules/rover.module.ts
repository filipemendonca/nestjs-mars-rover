import { Module } from '@nestjs/common';
import { RoverService } from 'src/services/rover.service';
import { OrientationModule } from './orientation.module';

@Module({
  imports: [OrientationModule],
  controllers: [],
  providers: [RoverService],
  exports: [RoverService],
})
export class RoverModule {}
