import { Body, Controller, Get, Post, Put, ValidationPipe, HttpStatus, Param, Req, Res } from '@nestjs/common';
import { CreatePostDto, EditPostDto, UserLikePostDto } from '@like-button-sample/shared';

import jwt from 'jsonwebtoken';

@Controller()
export class TypeController {
  constructor() {}

  @Get('types')
  async handleGetAllTypes(@Req() req, @Res() res) {
    // consider put the following inside a middleware or an authGuard
    // const authHeader = req.get('authorization');
    // if (!authHeader) {
    //   return res.status(401).send('Authorization header is missing');
    // }
    // const token = authHeader.split(' ')[1];
    // try {
    //   const decodedToken = await jwt.decode(token);
    //   const roles = decodedToken['realm_access']['roles'];
    //   for (let i = 0; i < roles.length; i++) {
    //     if (roles[i] === 'default-roles-testing-realm') {
    //       return res.status(200).send('handleGetAllTypes');
    //     }
    //   }
    //   return res.status(403).send('Forbidden');
    // }
    // catch(error) {
    //   return res.status(401).send('Authorization failed');
    // }
    return res.status(200).send('handleGetAllTypes');
  }

  @Post('types')
  async handleCreateType(@Body() newType) {
    return 'handleCreateType';
  }

  @Get('types/:type_id')
  async handleGetType() {
    return 'handleGetType';
  }
}