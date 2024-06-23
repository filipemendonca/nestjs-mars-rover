import { ApiProperty } from '@nestjs/swagger';
import { Type } from 'class-transformer';
import { IsNotEmpty, IsString, Length, ValidateNested } from 'class-validator';

export class RoverDTO {
  constructor() {
    (this.landingPosition = null), (this.instruction = null);
  }

  @ApiProperty({ type: 'string' })
  @IsNotEmpty()
  @Length(3, 5, { message: 'Landing position length must be 5 or less.' })
  @IsString({
    message: 'Landing position must be a non nullable string value.',
  })
  public landingPosition: string;

  @ApiProperty({ type: 'string' })
  @IsNotEmpty()
  @Length(1, 100)
  @IsString({
    message: 'The instructions must be a non nullable string value.',
  })
  public instruction: string;
}

export class Rovers {
  @Type(() => RoverDTO)
  @ValidateNested({ each: true })
  @ApiProperty({ default: [new RoverDTO()] })
  rovers: RoverDTO[];
}
