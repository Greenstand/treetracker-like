import { Controller, ParseIntPipe, ValidationPipe } from '@nestjs/common';
import { MessagePattern, Payload } from '@nestjs/microservices';
import { CreatePostDto, EditPostDto } from '@like-button-sample/shared';
import { PostService } from './post.service';

@Controller()
export class PostController {
  constructor(private readonly postService: PostService) {}

  @MessagePattern('create_post')
  handlePostCreate(@Payload(ValidationPipe) data: CreatePostDto) {
    return this.postService.createPost(data);
  }

  @MessagePattern('get_post')
  handleGetPost(@Payload('postId', ParseIntPipe) postId: number) {
    return this.postService.getPost(postId);
  }

  @MessagePattern('edit_post')
  handlePostEdit(@Payload(ValidationPipe) data: EditPostDto) {
    return this.postService.editPost(data);
  }
}
