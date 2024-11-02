import { Test, TestingModule } from '@nestjs/testing';
import { UserService } from './user.service';
import { PrismaService } from '../prisma/prisma.service';
import { DeepMockProxy, mockDeep } from 'jest-mock-extended';
import { PrismaClient } from '@prisma/client';
import { randomUUID } from 'crypto';

describe('UserService', () => {
    let userService: UserService;
    let prismaMock: DeepMockProxy<PrismaClient>;

    beforeEach(async () => {
        prismaMock = mockDeep<PrismaClient>();

        const module: TestingModule = await Test.createTestingModule({
            providers: [
                UserService,
                {
                    provide: PrismaService,
                    useValue: prismaMock,
                },
            ],
        }).compile();

        userService = module.get<UserService>(UserService);
    });

    describe('getUserLikesOnType', () => {
        it('should return user likes from Prisma', async () => {
            const userUUID = randomUUID();
            const typeUUID = randomUUID();
            const objectUUId = randomUUID()
            const mockLikes = [
                {
                    id: randomUUID(),
                    type_id: typeUUID,
                    object_id: objectUUId,
                    user_id: userUUID,
                    time: new Date(),
                    active: true,
                    Type: {
                        id: typeUUID,
                        name: 'like1',
                    },
                },
            ];

            prismaMock.like.findMany.mockResolvedValue(mockLikes);

            const result = await userService.getUserLikesOnType({ userUUID, typeUUID });

            expect(result).toBe(mockLikes); // Validate the response
            expect(prismaMock.like.findMany).toHaveBeenCalledWith({
                where: { user_id: userUUID, type_id: typeUUID },
                include: { Type: true },
            });
        });
    });
});
