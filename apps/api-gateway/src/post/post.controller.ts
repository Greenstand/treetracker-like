import { Body, Controller, Get, Res, Param, Post, ValidationPipe, HttpStatus } from '@nestjs/common';
import { Response } from 'express';
import { PostService } from './post.service';
import { CreatePostDto, UserLikePostDto } from '@like-button-sample/shared';

@Controller('posts')
export class PostController {
  constructor(private readonly postService: PostService) {}

  @Post()
  async createPost(@Body(ValidationPipe) createPostDto: CreatePostDto) {
    return await this.postService.createPost(createPostDto);
  }

  @Get(':id')
  async getPost(@Param('id') id: string) {
    return await this.postService.getPost(id);
  }
  
  @Post(':id/like')
  async likePost(@Param('id') id: string, @Body() user: string) {
    let userLikePostDto = new UserLikePostDto(user['username'], parseInt(id), true);
    return await this.postService.likePost(userLikePostDto);
  }

  @Post(':id/unlike')
  async unlikePost(@Param('id') id: string, @Body() user: string) {
    let userLikePostDto = new UserLikePostDto(user['username'], parseInt(id), false);
    return await this.postService.likePost(userLikePostDto);
  }

}