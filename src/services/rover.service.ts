import { Injectable } from '@nestjs/common';
import { Directions, PlateauMatrix } from '../types/types';
import { OrientationService } from './orientation.service';

@Injectable()
export class RoverService {
  constructor(private readonly orientationService: OrientationService) {}
  //   private readonly orientationService: OrientationService;

  public async refreshRoverPositionIntoPlateau(
    directions: Directions,
    plateauMatrix: PlateauMatrix,
  ): Promise<PlateauMatrix> {
    plateauMatrix[directions.x][directions.y] = directions.orientation;
    return plateauMatrix;
  }

  public async roverWalk(
    command: string,
    directions: Directions,
    plateauMatrix: PlateauMatrix,
  ): Promise<Directions> {
    switch (command) {
      case 'L':
        directions.orientation =
          await this.orientationService.defineOrientationByCommand(
            'L',
            directions.orientation,
          );
        break;
      case 'R':
        directions.orientation =
          await this.orientationService.defineOrientationByCommand(
            'R',
            directions.orientation,
          );
        break;
      case 'M':
        await this.orientationService.changeOrientationThroughPlateau(
          directions,
        );
        await this.refreshRoverPositionIntoPlateau(directions, plateauMatrix);
        break;
    }

    return directions;
  }
}
