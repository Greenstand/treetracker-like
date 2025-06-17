// This file contains integration tests for the Type module.

import { Test, TestingModule } from '@nestjs/testing';
import { INestApplication } from '@nestjs/common';
import * as request from 'supertest';
import { AppModule } from '../src/app.module';


describe('TypeController (e2e)', () => {
  let app: INestApplication;

  beforeAll(async () => {
    const moduleFixture: TestingModule = await Test.createTestingModule({
      imports: [AppModule],
    }).compile();

    app = moduleFixture.createNestApplication();
    await app.init();
  });

  afterAll(async () => {
    await app.close();
  });

  it('GET /types/:type_uuid/things/:object_uuid should return like count', async () => {
    const response = await request(app.getHttpServer())
      .get('/types/trees/things/186734')
      .expect(200);

    expect(response.body).toHaveProperty('objectType', 'trees');
    expect(response.body).toHaveProperty('objectId', '186734');
    expect(response.body).toHaveProperty('numLikes');
  });
});
