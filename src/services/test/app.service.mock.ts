import { Injectable } from "@nestjs/common";
import { RoverService } from "./rover.service.mock";

@Injectable()
export class AppService {
  constructor(private roverService: RoverService) {}

  moveRoverForward() {
    this.roverService.moveForward();
  }

  turnRoverClockwise() {
    this.roverService.turnClockwise();
  }

  turnRoverCounterClockwise() {
    this.roverService.turnCounterClockwise();
  }

  getRoverPosition() {
    return this.roverService.getPosition();
  }

  getRoverOrientation() {
    return this.roverService.getOrientation();
  }
}
