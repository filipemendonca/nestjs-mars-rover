import { Injectable } from "@nestjs/common";

export enum Orientation {
  NORTH,
  EAST,
  SOUTH,
  WEST,
}

@Injectable()
export class OrientationService {
  private orientations = [
    Orientation.NORTH,
    Orientation.EAST,
    Orientation.SOUTH,
    Orientation.WEST,
  ];

  getNextClockwise(orientation: Orientation): Orientation {
    const index = this.orientations.indexOf(orientation);
    return this.orientations[(index + 1) % this.orientations.length];
  }

  getNextCounterClockwise(orientation: Orientation): Orientation {
    const index = this.orientations.indexOf(orientation);
    return this.orientations[
      (index + this.orientations.length - 1) % this.orientations.length
    ];
  }
}
