import { Module } from '@nestjs/common';
import { UserModule } from './user/user.module';
import { TypeModule } from './type/type.module';
import { PrismaModule } from './prisma/prisma.module';
import { UserService } from './user/user.service';
import { TypeService } from './type/type.service';
import { UserController } from './user/user.controller';
import { TypeController } from './type/type.controller';
import { ConfigModule } from '@nestjs/config';
import { ObjectModule } from './object/object.module';
import { ObjectController } from './object/object.controller';
import { ObjectService } from './object/object.service';

@Module({
  imports: [
    ConfigModule.forRoot({ isGlobal: true }),
    TypeModule,
    UserModule,
    ObjectModule,
    PrismaModule,
  ],
  controllers: [UserController, TypeController, ObjectController],
  providers: [UserService, TypeService, ObjectService],
})
export class AppModule {}
