import { Test, TestingModule } from '@nestjs/testing';
import { TypeService } from './type.service';
import { PrismaService } from '../prisma/prisma.service';

describe('TypeService', () => {
  let service: TypeService;
  let prisma: PrismaService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [TypeService, PrismaService],
    }).compile();

    service = module.get<TypeService>(TypeService);
    prisma = module.get<PrismaService>(PrismaService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });

  describe('getLikeCount', () => {
    it('should return like count for a given object', async () => {
      jest.spyOn(prisma.like, 'count').mockResolvedValue(5);

      const result = await service.getLikeCount('trees', '186734');

      expect(result).toEqual({
        objectType: 'trees',
        objectId: '186734',
        numLikes: 5,
      });
    });
  });
});
