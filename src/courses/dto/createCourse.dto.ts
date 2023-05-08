import { ApiProperty } from '@nestjs/swagger';
import { IsNotEmpty, IsString } from 'class-validator';

export class CreateCourseDTO {
  @IsString()
  @IsNotEmpty()
  @ApiProperty({})
  name: string;

  @IsString()
  @IsNotEmpty()
  @ApiProperty({})
  descriptions: string;

  @IsString()
  @IsNotEmpty()
  @ApiProperty({})
  type: string;
}
