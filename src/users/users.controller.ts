import { UsersService } from './users.service';
import { Controller, Get, Param, Post } from '@nestjs/common';
import {ApiTags } from '@nestjs/swagger';

@ApiTags('Users')
@Controller('users')
export class UsersController{
  constructor(private userService: UsersService) {
  }

  @Get('/any')
  async getSomething(){
    return await this.userService.return_anything();
  }

  // @Post('user/:user_id/types/:type_id')
  // async getUserLikeActivities{
  //
  // }

  @Get(':user_id/types/:type_id')
  async getLikesByUserIdAndTypeId(
    @Param('user_id') userId: string,
    @Param('type_id') typeId: string,
  ) {
    let userId_ = Number(userId)
    return this.userService.getUserLikeActivities(userId_, typeId);
  }
}
