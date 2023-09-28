import { Body, Controller, Get, Param, Post, ValidationPipe, HttpStatus, Res } from '@nestjs/common';
import { Response } from 'express';
import { UserService } from './user.service';
import { AuthenticateUserDto, CreateUserDto } from '@like-button-sample/shared';

@Controller('user')
export class UserController {
  constructor(private readonly userService: UserService) {}
  
  @Post('sign-up')
  createUser(@Body(ValidationPipe) createUserDto: CreateUserDto) {
    return this.userService.createUser(createUserDto);
  }
  
  @Post('sign-in')
  async signInUser(@Res() res: Response, @Body(ValidationPipe) authenticateUserDto: AuthenticateUserDto) {
    // return this.userService.validateUser(authenticateUserDto);
    const user = await this.userService.validateUser(authenticateUserDto);
    console.log(`found user ${user}`);
    if (user != null) {
      res.status(HttpStatus.FOUND).json(user);
    }
    else {
      res.status(HttpStatus.NO_CONTENT).send();
    }
  }
}