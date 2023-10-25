import { Module } from '@nestjs/common';
import { PostModule } from './post/post.module';
import { UserModule } from './user/user.module';

@Module({
  imports: [
    PostModule,
    UserModule
  ],
  controllers: [],
  providers: [],
})
export class AppModule {}