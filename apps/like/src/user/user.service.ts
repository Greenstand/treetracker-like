import { Injectable } from '@nestjs/common';
// import { CreateUserDto } from 'libs/validation';
import { PrismaService } from '../prisma/prisma.service';
import { GetUserLikesDto } from './dto/get-user-likes-dto';

@Injectable()
export class UserService {
  constructor(private prismaService: PrismaService) {}

  async getUserLikesOnType(params: GetUserLikesDto) {
    return await this.prismaService.like.findMany({
      where: { user_id: params.userUUID, type_id: params.typeUUID },
      include: {
        Type: true,
      },
    });
  }
  // async createUser(createUserDto: CreateUserDto) {
  //   const existedUser = await prisma.user.findFirst({
  //     where: { id: createUserDto.id }
  //   });
  //   if (existedUser != null) {
  //     console.log(`user ${existedUser.name} already exists`);
  //     return null;
  //   }
  //   console.log(`saving user ${createUserDto.name}...`);
  //   return await prisma.user.create({
  //     data: {
  //       id: createUserDto.id,
  //       username: createUserDto.username,
  //       name: createUserDto.name,
  //     },
  //   });
  // }

  // async getUserById(userId: string) {
  //   return await prisma.user.findFirst({
  //     where: { id: userId }
  //   });
  // }

  // async getPostsByUser (username: string) {
  //   return await prisma.user.findFirst({
  //     where: { username: username },
  //     include: { createdPosts: true }
  //   });
  // }
}
