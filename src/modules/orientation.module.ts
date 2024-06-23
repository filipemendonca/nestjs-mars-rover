import { Module } from '@nestjs/common';
import { OrientationService } from 'src/services/orientation.service';

@Module({
  imports: [],
  controllers: [],
  providers: [OrientationService],
  exports: [OrientationService],
})
export class OrientationModule {}
