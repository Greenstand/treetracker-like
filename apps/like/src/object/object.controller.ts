import { Body, Controller, Get, Post, Put, ValidationPipe, HttpStatus, Param, Req, Res } from '@nestjs/common';
import { ObjectService } from './object.service';
import jwt from 'jsonwebtoken';

@Controller('types')
export class ObjectController {
  constructor() {}

  @Get(':type_id/things/:object_id')
  async handleGetObjectLikes() {
    return 'handleGetObjectLikes';
  }

  @Post(':type_id/things/:object_id/like')
  async handleLikeObject() {
    return 'handleLikeObject';
  }

  @Post(':type_id/things/:object_id/unlike')
  async handleUnlikeObject() {
    return 'handleUnlikeObject';
  }
}
