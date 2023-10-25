import { Body, Controller, Post, Get, ValidationPipe, HttpStatus, Param, Res } from '@nestjs/common';
import { Response } from 'express';
import { UserService } from './user.service';
import { AuthDto } from '../dto/auth.dto';

@Controller('user')
export class UserController {
  constructor(private readonly userService: UserService) {}
  
  // @Post('sign-up')
  // createUser(@Body(ValidationPipe) createUserDto: CreateUserDto) {
  //   return this.userService.createUser(createUserDto);
  // }
  
  @Post('sign-in')
  async signInUser(@Res() res: Response, @Body(ValidationPipe) authDto: AuthDto) {
    const user = await this.userService.validateUser(authDto);
    if (user != null) {
      console.log(user);
      res.status(HttpStatus.OK).json(user);
    }
    else {
      res.status(HttpStatus.NOT_FOUND).send();
    }
  }

  @Get(':username/posts')
  async getUserPosts(@Param('username') username: string, @Res() res: Response) {
    const postsQuery = await this.userService.getUserPosts(username);
    console.log(postsQuery.data);
    res.json(postsQuery.data);
  }

  
}