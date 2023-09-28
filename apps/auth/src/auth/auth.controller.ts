import { Controller, ParseIntPipe, ValidationPipe } from '@nestjs/common';
import { EventPattern, MessagePattern, Payload } from '@nestjs/microservices';
import { AuthService } from './auth.service';
import { CreateUserDto, AuthenticateUserDto } from '@like-button-sample/shared';

@Controller('auth')
export class AuthController {
  constructor( private readonly authService: AuthService ) {}

  @MessagePattern('create_user')
  handleUserCreate(@Payload(ValidationPipe) data: CreateUserDto) {
    return this.authService.createAuthUser(data);
  }

  @MessagePattern('validate_user')
  handleUserValidate(@Payload(ValidationPipe) data: AuthenticateUserDto) {
    return this.authService.authenticateUser(data);
  }  
}