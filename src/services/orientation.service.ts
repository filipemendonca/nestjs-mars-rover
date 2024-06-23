import { Injectable } from '@nestjs/common';
import {
  Directions,
  orientationForLeftCommand,
  orientationForRightCommand,
} from '../types/types';
import { PlateauHelper } from '../helpers/PlateauHelper';

@Injectable()
export class OrientationService {
  public async defineOrientationByCommand(
    command: string,
    orientation: string,
  ): Promise<string> {
    if (command == 'L') return orientationForLeftCommand[orientation];
    else return orientationForRightCommand[orientation];
  }

  public extractDirections = async (
    landingPosition: string,
  ): Promise<Directions> => {
    const directionsArray =
      await PlateauHelper.getDirectionsArray(landingPosition);

    return {
      x: +directionsArray[0],
      y: +directionsArray[1],
      orientation: directionsArray[2],
    };
  };

  public async changeOrientationThroughPlateau(
    directions: Directions,
  ): Promise<void> {
    switch (directions.orientation) {
      case 'N':
        directions.y++;
        break;
      case 'S':
        directions.y--;
        break;
      case 'E':
        directions.x++;
        break;
      case 'W':
        directions.x--;
        break;
    }
  }
}
