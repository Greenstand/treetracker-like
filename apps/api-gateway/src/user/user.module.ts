import { Module } from "@nestjs/common";
import { ClientsModule, Transport } from '@nestjs/microservices';
import { UserController } from './user.controller';
import { UserService } from './user.service';

@Module({
  imports: [
    ClientsModule.register([
      {
        name: 'AUTH_MICROSERVICE',
        transport: Transport.KAFKA,
        options: {
          client: {
            clientId: 'auth',
            brokers: ['localhost:9092']
          },
          // producerOnlyMode: true,
          consumer: {
            groupId: 'auth-consumer'
          }
        }
      },
      {
        name: 'POST_MICROSERVICE',
        transport: Transport.KAFKA,
        options: {
          client: {
            clientId: 'post',
            brokers: ['localhost:9092']
          },
          // producerOnlyMode: true,
          consumer: {
            groupId: 'post-consumer'
          }
        }
      }
    ]),
  ],
  providers: [UserService],
  controllers: [UserController],
})
export class UserModule {}