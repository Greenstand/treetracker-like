import { Body, Controller, Get, Res, Param, Post, ValidationPipe, HttpStatus } from '@nestjs/common';
import { Response } from 'express';
import { PostService } from './post.service';
import { CreatePostDto, UserLikePostDto } from '@like-button-sample/shared';

@Controller('posts')
export class PostController {
  constructor(private readonly postService: PostService) {}

  @Post()
  createPost(@Body(ValidationPipe) createPostDto: CreatePostDto) {
    return this.postService.createPost(createPostDto);
  }

  @Get(':id')
  getPost(@Param('id') id: string) {
    return this.postService.getPost(parseInt(id));
  }
  
  @Post(':id/like')
  likePost(@Param('id') id: string, @Body() userEmail: string) {
    let userLikePostDto = new UserLikePostDto(userEmail, parseInt(id));
    return this.postService.likePost(userLikePostDto);
  }
}