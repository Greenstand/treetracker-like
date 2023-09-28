import { Controller, ParseIntPipe, ValidationPipe } from '@nestjs/common';
import { MessagePattern, Payload } from '@nestjs/microservices';
import { UserService } from './user.service';
import { CreateUserDto } from '@like-button-sample/shared';

@Controller()
export class UserController {
  constructor(private readonly userService: UserService) {}

  @MessagePattern('create_user')
  handleCreateUser(@Payload(ValidationPipe) data: CreateUserDto) {
    return this.userService.createUser(data);
  }

  @MessagePattern('get_user')
  handleGetUser(@Payload('userId', ParseIntPipe) userId: number) {
    return this.userService.getUser(userId);
  }
}
