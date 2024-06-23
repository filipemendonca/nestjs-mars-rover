import { Injectable } from '@nestjs/common';
import { PlateauDTO } from '../dto/PlateauDto';
import { Rovers } from '../dto/RoverDto';
import { PlateauHelper } from '../helpers/PlateauHelper';
import { Directions } from '../types/types';
import { OrientationService } from './orientation.service';
import { RoverService } from './rover.service';

@Injectable()
export class AppService {
  constructor(
    private readonly orientationService: OrientationService,
    private readonly roverService: RoverService,
  ) {}

  public async execute(
    plateau: PlateauDTO,
    model: Rovers,
  ): Promise<Directions[]> {
    let finalDirectionPerRover: Directions;
    const directionsResponse: Directions[] = [];

    const plateauMatrix = await PlateauHelper.buildPlateau(plateau);
    const numberOfRovers = model.rovers.length;

    for (let i = 0; i < numberOfRovers; i++) {
      const instructions = await PlateauHelper.getInstructions(
        model.rovers[i].instruction,
      );

      const direction = await this.orientationService.extractDirections(
        model.rovers[i].landingPosition,
      );

      const refreshedPlateau =
        await this.roverService.refreshRoverPositionIntoPlateau(
          direction,
          plateauMatrix,
        );

      for (let j = 0; j < instructions.length; j++) {
        finalDirectionPerRover = await this.roverService.roverWalk(
          instructions[j],
          direction,
          refreshedPlateau,
        );
      }

      directionsResponse.push(finalDirectionPerRover);
    }

    return directionsResponse;
  }
}
