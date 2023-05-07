import { ApiProperty } from '@nestjs/swagger';
import { IsEmail, IsNotEmpty, IsString } from 'class-validator';

export class SignUpDTO {
  @ApiProperty({
    description: "L'email doit être renseigné pour pouvoir créer un compte",
    required: true,
  })
  @IsEmail()
  @IsNotEmpty()
  email: string;
  @IsString()
  @IsNotEmpty()
  password: string;
  firstName?: string;
  lastName?: string;
  birthDay?: string;
  sexe?: string;
}
