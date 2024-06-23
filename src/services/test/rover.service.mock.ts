import { Injectable } from "@nestjs/common";
import { Orientation, OrientationService } from "./orientation.service.mock";

export interface Position {
  x: number;
  y: number;
}

@Injectable()
export class RoverService {
  private position: Position = { x: 0, y: 0 };
  private orientation: Orientation = Orientation.NORTH;

  constructor(private orientationService: OrientationService) {}

  getPosition(): Position {
    return this.position;
  }

  getOrientation(): Orientation {
    return this.orientation;
  }

  moveForward() {
    switch (this.orientation) {
      case Orientation.NORTH:
        this.position.y += 1;
        break;
      case Orientation.EAST:
        this.position.x += 1;
        break;
      case Orientation.SOUTH:
        this.position.y -= 1;
        break;
      case Orientation.WEST:
        this.position.x -= 1;
        break;
    }
  }

  turnClockwise() {
    this.orientation = this.orientationService.getNextClockwise(
      this.orientation
    );
  }

  turnCounterClockwise() {
    this.orientation = this.orientationService.getNextCounterClockwise(
      this.orientation
    );
  }
}
