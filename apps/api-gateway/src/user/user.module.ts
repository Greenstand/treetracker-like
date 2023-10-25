import { Module } from "@nestjs/common";
import { UserController } from './user.controller';
import { UserService } from './user.service';
import { AuthDto } from "../dto/auth.dto";

@Module({
  imports: [],
  providers: [UserService, AuthDto],
  controllers: [UserController],
})
export class UserModule {}