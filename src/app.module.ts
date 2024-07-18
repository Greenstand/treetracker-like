import { UsersModule } from './users/users.module';
import { UsersController } from './users/users.controller';
import { UsersService } from './users/users.service';
import { Module } from '@nestjs/common';
import { PrismaModule } from './prisma/prisma.module';
import { ConfigModule } from '@nestjs/config';

@Module({
  imports: [UsersModule, PrismaModule, ConfigModule.forRoot({ isGlobal: true }),],
  controllers: [UsersController],
  providers: [UsersService]
})
export class AppModule {
}
