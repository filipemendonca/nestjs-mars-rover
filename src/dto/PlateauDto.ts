import { ApiProperty } from '@nestjs/swagger';
import { IsNotEmpty } from 'class-validator';

export class PlateauDTO {
  constructor() {
    this.x = 0;
    this.y = 0;
  }

  @ApiProperty()
  @IsNotEmpty()
  public x: number;

  @ApiProperty()
  @IsNotEmpty()
  public y: number;
}
