import { Injectable } from '@nestjs/common';
import { CreatePostDto, EditPostDto } from '@like-button-sample/shared';
import { prisma } from '../../prisma/prisma';

@Injectable()
export class PostService {
  constructor() {}

  async createPost (createPostDto: CreatePostDto) {
    const { content, username } = createPostDto;
    let user = await prisma.user.findFirst({
      where: { username: username }
    }); 
    console.log(user);
    if (user == null) {
      return null;
    }
    const post = await prisma.post.create({
      data: {
        content,
        creator: {
          connect: { id: user.id }
        },
      },
    });
    console.log(post);
    return post;
  }

  async getPost(postId: number) {
    return await prisma.post.findFirst({
      where: { id: postId }
    });
  }

  async likePost(postId: number, username: string, like: boolean) {
    if (like) {
      await prisma.post.update({
        where: { id: postId },
        data: {
          likedUsers: {
            create: {
              user: {
                connect: { username: username },
              },
            },
          },
        }
      }).catch((e) => { return null; });
    }
    else {}
    return await prisma.post.findFirst({
      where: { id: postId },
      include: { likedUsers: true }
    });
  }

  async editPost(postId: string, editPostDto: EditPostDto) {
    const updatedPost = await prisma.post.update({
      where: { id: editPostDto.postId },
      data: { content: editPostDto.content }
    });
    return updatedPost;
  }
}
