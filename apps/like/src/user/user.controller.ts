import { Body, Controller, Post, Get, Param, ParseIntPipe, ValidationPipe } from '@nestjs/common';
import { UserService } from './user.service';
import { CreateUserDto } from '@like-button-sample/shared';

@Controller('users')
export class UserController {
  constructor(private readonly userService: UserService) {}

  @Post()
  async handleCreateUser(@Body(ValidationPipe) data: CreateUserDto) {
    return await this.userService.createUser(data);
  }

  @Get(':id')
  async handleGetUser(@Param('id') id: string) {
    return await this.userService.getUserById(id);
  }

  @Get(':username/posts')
  async handleGetUserPosts(@Param('username') username: string) {
    return await this.userService.getPostsByUser(username);
  }
}
