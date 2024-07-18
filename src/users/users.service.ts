import { Injectable } from '@nestjs/common';
import { PrismaService } from '../prisma/prisma.service';

@Injectable()
export class UsersService {
  constructor(private prisma: PrismaService) {
  }

  // async getUserLikeActivityOnType(userId: string){
  //   const result = await this.prisma.type
  // }

  async return_anything(){
    return "Anything"
  }

  async getUserLikeActivities(user_id: number, type_id_: string){

    return await this.prisma.like.findMany({
      where: {type_id: type_id_, user_id: user_id},
      include: { Type: true }
    })
  }
}
