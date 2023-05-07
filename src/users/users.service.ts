import { Injectable } from '@nestjs/common';
import { PrismaService } from 'src/prisma/prisma.service';
import { GetUserDTO } from './dto/getUser.dto';
import { DeleteUserDTO } from './dto/deleteUser.dto';
import { UpdateUserDTO } from './dto/updateUser.dto';
import { CreateUserDTO } from './dto/createUser.dto';

@Injectable()
export class UsersService {
  constructor(private prisma: PrismaService) {}

  async getUsers() {
    const users = await this.prisma.users.findMany({});
    return users;
  }

  async getUser(dto: GetUserDTO) {
    const user = await this.prisma.users.findUnique({
      where: {
        id: dto.id,
      },
    });
    return user;
  }

  async createUser(dto: CreateUserDTO) {
    const user = await this.prisma.users.create({
      data: dto,
    });
    return user;
  }

  async updateUser(id: string, dto: UpdateUserDTO) {
    const user = await this.prisma.users.update({
      where: {
        id: id,
      },
      data: {
        email: dto.email,
      },
    });
    return user;
  }

  async deleteUser(dto: DeleteUserDTO) {
    const user = await this.prisma.users.delete({
      where: {
        id: dto.id,
      },
    });
    return user;
  }
}
