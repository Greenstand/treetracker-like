import { Module } from '@nestjs/common';
import { UserModule } from './user/user.module';
import { ObjectModule } from './object/object.module';
import { TypeModule } from './type/type.module';
import { PrismaModule } from './prisma/prisma.module';

@Module({
  imports: [
    ObjectModule,
    TypeModule,
    UserModule,
    PrismaModule
  ],
  controllers: [],
  providers: [],
})
export class AppModule {}