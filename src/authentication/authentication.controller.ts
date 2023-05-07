import { Body, Controller, Post } from '@nestjs/common';
import { LoginDTO } from './dto/login.dto';
import { SignUpDTO } from './dto/signup.dto';
import { AuthenticationService } from './authentication.service';
import { ApiOperation, ApiTags } from '@nestjs/swagger';

@ApiTags('Authentication')
@Controller('authentication')
export class AuthenticationController {
  constructor(private authService: AuthenticationService) {}

  @Post('login')
  @ApiOperation({
    summary: "URL appelé pour pouvoir se connecter à l'application",
  })
  login(@Body() dto: LoginDTO) {
    return this.authService.login(dto);
  }

  @Post('signup')
  @ApiOperation({
    summary: "URL appelé pour pouvoir créer un compte sur l'application",
  })
  signup(@Body() dto: SignUpDTO) {
    return this.authService.singup(dto);
  }
}
