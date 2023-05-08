import { ForbiddenException, Injectable } from '@nestjs/common';
import { ConfigService } from '@nestjs/config';
import { JwtService } from '@nestjs/jwt';
import { PrismaService } from 'src/prisma/prisma.service';
import { LoginDTO } from './dto/login.dto';
import { SignUpDTO } from './dto/signup.dto';
import * as argon from 'argon2';

@Injectable()
export class AuthenticationService {
  constructor(
    private prisma: PrismaService,
    private jwt: JwtService,
    private config: ConfigService,
  ) {}

  async login(dto: LoginDTO) {
    console.log({ dto });
    const user = await this.prisma.users.findUnique({
      where: {
        email: dto.email,
      },
    });

    console.log({ user });
    // Guard
    if (!user) throw new ForbiddenException('Credential incorrent');
    const pwMatch = await argon.verify(user.hash_password, dto.password);
    if (!pwMatch) throw new ForbiddenException('Credential incorrect');

    const token = await this.signToken(user.id, user.email);
    delete user.hash_password;
    const returnedUser = { ...user, ...token };
    return returnedUser;
  }

  async singup(dto: SignUpDTO) {
    const hashedPassword = await argon.hash(dto.password);

    try {
      const user = await this.prisma.users.create({
        data: {
          email: dto.email,
          hash_password: hashedPassword,
        },
      });
      delete user.hash_password;
      return user;
    } catch (err) {
      throw new ForbiddenException(err);
    }
  }

  async signToken(
    userId: string,
    email: string,
  ): Promise<{ access_token: string }> {
    const payload = { sub: userId, email };
    const secret: string = this.config.get('JWT_SECRET');
    const token = await this.jwt.signAsync(payload, {
      expiresIn: '20m',
      secret: secret,
    });
    return { access_token: token };
  }
}
