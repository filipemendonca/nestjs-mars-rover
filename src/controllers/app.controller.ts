import { Body, Controller, Post, Query } from '@nestjs/common';
import { ApiResponse, ApiTags } from '@nestjs/swagger';
import { AppService } from '../services/app.service';
import { PlateauDTO } from '../dto/PlateauDto';
import { Rovers } from '../dto/RoverDto';
import { Directions } from '../types/types';

@ApiTags('Rover')
@Controller('Rover')
export class AppController {
  constructor(private readonly appService: AppService) {}

  @Post()
  @ApiResponse({
    status: 201,
    description: 'The rover/s walk correctly on the plateau.',
    isArray: true,
  })
  @ApiResponse({
    status: 400,
    description: 'Something on inputs is going wrong.',
  })
  async post(
    @Query() plateau: PlateauDTO,
    @Body() model: Rovers,
  ): Promise<Directions[]> {
    return await this.appService.execute(plateau, model);
  }
}
