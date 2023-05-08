import { ApiProperty } from '@nestjs/swagger';
import { IsEmail, IsNotEmpty, IsString } from 'class-validator';

export class SignUpDTO {
  @IsEmail()
  @IsNotEmpty()
  @ApiProperty({
    description: "L'email doit être renseigné pour pouvoir créer un compte",
    required: true,
  })
  email: string;

  @IsString()
  @IsNotEmpty()
  @ApiProperty({})
  password: string;

  @IsString()
  @ApiProperty({})
  firstName?: string;

  @IsString()
  @ApiProperty({})
  lastName?: string;

  @IsString()
  @ApiProperty({})
  birthDay?: string;

  @IsString()
  @ApiProperty({})
  sexe?: string;
}
