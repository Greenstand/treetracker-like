import { Test, TestingModule } from '@nestjs/testing';
import { INestApplication } from '@nestjs/common';
import { UserModule } from '../src/user/user.module';
import { PrismaService } from '../src/prisma/prisma.service';
import { DeepMockProxy, mockDeep } from 'jest-mock-extended';
import * as request from 'supertest';
import { randomUUID } from 'crypto';

describe('UserModule (Integration with Prisma Mock)', () => {
    let app: INestApplication;
    let prismaMock: DeepMockProxy<PrismaService>;
    const port = 3000;

    beforeAll(async () => {
        prismaMock = mockDeep<PrismaService>();

        // Inject
        const moduleFixture: TestingModule = await Test.createTestingModule({
            imports: [UserModule],
        })
            .overrideProvider(PrismaService)
            .useValue(prismaMock)
            .compile();

        app = moduleFixture.createNestApplication();
        await app.init();
        await app.listen(port)
    });

    afterAll(async () => {
        await app.close();
    });

    describe('GET /user/:user_uuid/types/:type_uuid', () => {
        it('should return mocked user likes', async () => {
            const typeId = randomUUID();
            const likeId = randomUUID();
            const userId = randomUUID();
            const objectId = randomUUID()
            const mockLikes = [
                {
                    id: likeId,
                    type_id: typeId,
                    object_id: objectId,
                    user_id: userId,
                    time: new Date(),
                    active: true,
                    Type: { id: typeId, name: 'like1' },
                },
            ];

            prismaMock.like.findMany.mockResolvedValue(mockLikes);

            const response = await request(app.getHttpServer())
                .get(`/user/${userId}/types/${typeId}`)
                .expect(200);

            expect(response.body).toEqual(
                mockLikes.map((like) => ({
                    ...like,
                    time: like.time.toISOString(),
                })),
            );

            expect(prismaMock.like.findMany).toHaveBeenCalledWith({
                where: { user_id: userId, type_id: typeId },
                include: { Type: true },
            });
        });

        it('should get 400', async () => {
            const typeId = randomUUID();
            const userId = randomUUID();
            const likeId = randomUUID();
            const objectId = randomUUID();
            const mockLikes = [
                {
                    id: likeId,
                    type_id: typeId,
                    object_id: objectId,
                    user_id: userId,
                    time: new Date(),
                    active: true,
                    Type: { id: typeId, name: 'like1' },
                },
            ];


            prismaMock.like.findMany.mockResolvedValue(mockLikes);

            await request(app.getHttpServer())
                .get(`/user/${userId}/types/${'44'}`)
                .expect(400);
        });

    });
});
