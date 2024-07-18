import { UsersController } from './users.controller';
import { UsersService } from './users.service';
import { Module } from '@nestjs/common';

@Module({})
export class UsersModule{
  controllers: [UsersController];
  providers: [UsersService];
  export: [UsersService];
}
