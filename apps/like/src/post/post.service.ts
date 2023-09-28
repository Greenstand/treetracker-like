import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { Post } from '../entities/post.entity';
import { User } from '../entities/user.entity';
import { CreatePostDto, EditPostDto } from '@like-button-sample/shared';


@Injectable()
export class PostService {
  constructor(
    @InjectRepository(User) private readonly userRepository: Repository<User>,
    @InjectRepository(Post) private readonly postRepository: Repository<Post>
  ) {}

  createPost (createPostDto: CreatePostDto) {
    let user = null;
    this.userRepository.findOne({
        where: { email: createPostDto.userEmail }
    })
        .then(u => { user = u });
    if (user == null) {
      return null;
    }
    let post: Post = new Post();
    post.creator = user;
    post.content = createPostDto.content;
    return this.postRepository.save(post);
  }

  getPost(postId: number) {
    return this.postRepository.findOne({
      where: { id: postId }
    });
  }

  editPost(editPostDto: EditPostDto) {
    let oldPost = null;
    this.postRepository.findOne({
      where: { id: editPostDto.postId }
    })
      .then(p => { oldPost = p });
    if (oldPost == null) {
      return null;
    }
    let newPost: Post = new Post();
    newPost.creator = oldPost.creator;
    newPost.likedUsers = oldPost.likedUsers;
    newPost.content = editPostDto.content;
    this.postRepository.delete({ id: oldPost.id });
    return this.postRepository.save(newPost);
  }
}
