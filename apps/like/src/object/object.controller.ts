import { Body, Controller, Get, Post, Put, ValidationPipe, HttpStatus, Param, Req, Res } from '@nestjs/common';
import jwt from 'jsonwebtoken';

@Controller()
export class ObjectController {
  constructor() {}

  @Get('types/:type_id/things/:object_id')
  async handleGetObjectLikes() {
    return 'handleGetObjectLikes';
  }

  @Post('types/:type_id/things/:object_id/like')
  async handleLikeObject() {
    return 'handleLikeObject';
  }

  @Post('types/:type_id/things/:object_id/unlike')
  async handleUnlikeObject() {
    return 'handleUnlikeObject';
  }
}
