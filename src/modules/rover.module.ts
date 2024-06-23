import { Module } from "@nestjs/common";
import { RoverService } from "../services/rover.service";
import { OrientationModule } from "./orientation.module";

@Module({
  imports: [OrientationModule],
  controllers: [],
  providers: [RoverService],
  exports: [RoverService],
})
export class RoverModule {}
