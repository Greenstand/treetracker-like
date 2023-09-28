import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm/dist';
import { User } from './entities/user.entity';
import { AuthModule } from './auth/auth.module';

@Module({
  imports: [
    TypeOrmModule.forRoot({
      type: 'sqlite',
      database: 'authDB',
      entities: [User],
      synchronize: true
    }),
    AuthModule
  ],
  controllers: [],
  providers: [],
})
export class AppModule {}
