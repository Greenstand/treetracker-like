import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { User } from './entities/user.entity';
import { Post } from './entities/post.entity';
import { PostModule } from './post/post.module';
import { UserModule } from './user/user.module';

@Module({
  imports: [
    TypeOrmModule.forRoot({
      type: 'sqlite',
      database: 'postDB',
      entities: [User, Post],
      synchronize: true,
    }),
    PostModule,
    UserModule
  ],
  controllers: [],
  providers: [],
})
export class AppModule {}