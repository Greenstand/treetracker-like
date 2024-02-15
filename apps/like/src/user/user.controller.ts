import { Body, Controller, Post, Get, Param, ParseIntPipe, ValidationPipe } from '@nestjs/common';
import { UserService } from './user.service';

@Controller('users')
export class UserController {
  constructor() {}

  @Get(':user_uuid/types/:type_uuid')
  async handleGetUserLikes(@Param('user_uuid') user_uuid: string) {
    return 'handleGetUserLikes';
  }
}
