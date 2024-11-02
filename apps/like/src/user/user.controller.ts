import {
  Controller,
  Get,
  Param,
  ValidationPipe,
} from '@nestjs/common';
import { UserService } from './user.service';
import { ApiOperation, ApiResponse, ApiTags } from '@nestjs/swagger';
import { GetUserLikesDto } from './dto/get-user-likes-dto';

@Controller('user')
@ApiTags('user')

export class UserController {
  constructor(private userService: UserService) {}

  @Get(':userUUID/types/:typeUUID')
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
    @Param(ValidationPipe) params: GetUserLikesDto,
  ) {
    return this.userService.getUserLikesOnType(params);
  }
}
