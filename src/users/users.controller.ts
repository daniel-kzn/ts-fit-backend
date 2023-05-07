import {
  Controller,
  Get,
  Param,
  Post,
  Patch,
  Delete,
  Body,
} from '@nestjs/common';
import { GetUserDTO } from './dto/getUser.dto';
import { UsersService } from './users.service';
import { DeleteUserDTO } from './dto/deleteUser.dto';
import { CreateUserDTO } from './dto/createUser.dto';
import { UpdateUserDTO } from './dto/updateUser.dto';
import { ApiTags } from '@nestjs/swagger';

@ApiTags('Utilisateur')
@Controller('users')
export class UsersController {
  constructor(private usersService: UsersService) {}

  @Get()
  getUsers() {
    return this.usersService.getUsers();
  }

  @Get('/:id')
  getUser(@Param() dto: GetUserDTO) {
    return this.usersService.getUser(dto);
  }

  @Post()
  createUser(@Body() dto: CreateUserDTO) {
    return this.usersService.createUser(dto);
  }

  @Patch('/:id')
  updateUser(@Param() id, @Body() dto: UpdateUserDTO) {
    return this.usersService.updateUser(id, dto);
  }

  @Delete('/:id')
  deleteCar(@Param() id: DeleteUserDTO) {
    const user = this.usersService.deleteUser(id);
    return {
      message: `L'utilisateur avec l'id ${id} à été supprimé avec succes`,
      data: user,
    };
  }
}
