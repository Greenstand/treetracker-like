import { Inject, Injectable, OnModuleInit } from '@nestjs/common';
import { ClientKafka } from '@nestjs/microservices';
import { CreatePostDto, UserLikePostDto } from '@like-button-sample/shared';

@Injectable()
export class PostService implements OnModuleInit {
  constructor (
    @Inject('POST_MICROSERVICE') private readonly postClient: ClientKafka
  ) {}

  createPost(data: CreatePostDto) {
    return 'createPost function';

    this.postClient
          .send('create_post', JSON.stringify(data))
          .subscribe((post) => {
            return post;
          });
  }

  getPost(postId: number) {
    return 'getPost function';

    this.postClient
          .send('get_post', JSON.stringify({postId}))
          .subscribe((post) => {
            if (post != null) {
              return post;
            }
            else {
              return 'post no longer exists';
            }
          });
  }

  likePost(data: UserLikePostDto) {
    return 'likePost function';

    this.postClient.emit('user_like_post', JSON.stringify(data));
  }

  onModuleInit() {
      this.postClient.subscribeToResponseOf('create_post');
      this.postClient.subscribeToResponseOf('get_post');
  }
}
