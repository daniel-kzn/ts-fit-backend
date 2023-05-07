import { Module } from '@nestjs/common';
import { AuthenticationModule } from './authentication/authentication.module';
import { ConfigModule } from '@nestjs/config';
import { UsersModule } from './users/users.module';
import { PrismaModule } from './prisma/prisma.module';
import { ReservationsModule } from './reservations/reservations.module';
import { SessionsModule } from './sessions/sessions.module';
import { CoursesModule } from './courses/courses.module';
import { RolesModule } from './roles/roles.module';

@Module({
  imports: [
    ConfigModule.forRoot({
      isGlobal: true,
    }),
    AuthenticationModule,
    UsersModule,
    PrismaModule,
    ReservationsModule,
    SessionsModule,
    CoursesModule,
    RolesModule,
  ],
})
export class AppModule {}
