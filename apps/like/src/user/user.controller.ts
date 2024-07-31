import {
  Body,
  Controller,
  Post,
  Get,
  Param,
  ParseIntPipe,
  ValidationPipe,
} from '@nestjs/common';
import { UserService } from './user.service';
import { ApiOperation, ApiResponse, ApiTags } from '@nestjs/swagger';

@Controller('user')
@ApiTags('user')
export class UserController {
  constructor(private userService: UserService) {}

  @Get(':user_uuid/types/:type_uuid')
  @ApiOperation({ summary: 'Get user likes on type by user id' })
  @ApiResponse({
    status: 200,
    description: 'Successfully retrieved user activities',
  })
  @ApiResponse({
    status: 404,
    description: 'Not Found',
  })
  async handleGetUserLikes(
    @Param('user_uuid') user_uuid: string,
    @Param('type_uuid') type_uuid: string
  ) {
    return this.userService.getUserLikesOnType(user_uuid, type_uuid);
  }
}
