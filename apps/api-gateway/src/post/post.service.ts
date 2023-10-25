import { Injectable } from '@nestjs/common';
import { CreatePostDto, UserLikePostDto } from '@like-button-sample/shared';
import axios from 'axios';

@Injectable()
export class PostService {
  constructor () {}

  async createPost(data: CreatePostDto) {
    const query = await axios.post('http://localhost:3010/posts', data)
                  .catch((e) => { return null; });
    return query.data;
  }

  async getPost(postId: string) {
    const query = await axios.get(`http://localhost:3010/posts/${postId}`)
                  .catch((e) => { return null; });
    return query.data;
  }

  async likePost(data: UserLikePostDto) {
    const query = await axios.post(`http://localhost:3010/posts/like`, data)
                  .catch((e) => { return null; });
    return query.data;
  }
}
