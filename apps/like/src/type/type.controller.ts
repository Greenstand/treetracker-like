import { 
  Body, 
  Controller, 
  Get, 
  Post, 
  Put, 
  ValidationPipe, 
  HttpStatus, 
  Param, 
  Req, 
  Res, 
  Patch 
} from '@nestjs/common';
import { CreatePostDto, EditPostDto, UserLikePostDto } from 'libs/validation';
import { TypeService } from './type.service';  
import jwt from 'jsonwebtoken';

@Controller('types')
export class TypeController {
  constructor(private readonly typeService: TypeService) {}  

  @Get(':type_uuid/things/:object_uuid/like')
async getLikeCount(
  @Param('type_uuid') type_uuid: string,
  @Param('object_uuid') object_uuid: string
) {
  return this.typeService.getLikeCount(type_uuid, object_uuid);
}

  @Post()
  async handleCreateType(@Body() newType) {
    return 'handleCreateType';
  }

  @Get(':type_id')
  async handleGetType() {
    return 'handleGetType';
  }

  @Patch(':type_id')
  async handleEditType() {
    return 'handleEditType';
  }
}
