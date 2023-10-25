import { Body, Controller, Get, Post, Put, ValidationPipe, HttpStatus, Param } from '@nestjs/common';
import { CreatePostDto, EditPostDto, UserLikePostDto } from '@like-button-sample/shared';
import { PostService } from './post.service';

@Controller('posts')
export class PostController {
  constructor(private readonly postService: PostService) {}

  @Post()
  async handlePostCreate(@Body(ValidationPipe) data: CreatePostDto) {
    return await this.postService.createPost(data);
  }

  @Get(':id')
  async getPost(@Param('id') id: string) {
    console.log(parseInt(id) + 1);
    return await this.postService.getPost(parseInt(id));
  }
  
  @Post('like')
  async likePost(@Body(ValidationPipe) userLikePostDto: UserLikePostDto) {
    const { postId, username, like } = userLikePostDto;
    return await this.postService.likePost(postId, username, like);
  }

  @Put(':id')
  async handlePostEdit(@Param('id') id: string, @Body(ValidationPipe) data: EditPostDto) {
    return await this.postService.editPost(id, data);
  }
}
