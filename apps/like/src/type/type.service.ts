import { PrismaService } from '../prisma/prisma.service';
import { Injectable } from '@nestjs/common';

@Injectable()
export class TypeService {
  constructor(private prisma: PrismaService) {}

 async getLikeCount(typeUuid: string, objectUuid: string) {
  const likeCount = await this.prisma.like.count({
    where: {
      type_id: typeUuid,
      object_id: objectUuid,
    },
  });


  return {
    objectType: typeUuid,
    objectId: objectUuid,
    numLikes: likeCount,
  };
}
}

  
