import { Inject, Injectable, OnModuleInit } from '@nestjs/common';
import { ClientKafka } from '@nestjs/microservices';
import { AuthenticateUserDto, CreateUserDto } from '@like-button-sample/shared';

@Injectable()
export class UserService implements OnModuleInit {
  constructor(
    @Inject('AUTH_MICROSERVICE') private readonly authClient: ClientKafka,
    @Inject('POST_MICROSERVICE') private readonly postClient: ClientKafka
  ) {}

  createUser(createUserDto: CreateUserDto): any {    
    return 'createUser function';

    this.authClient
          .send('create_user', JSON.stringify(createUserDto))
          .subscribe((user) => {
            if (user != null) {
              console.log(`created user ${user.name}`);
              return this.postClient.emit('create_user', JSON.stringify(createUserDto));
              return user;
            }
            else {
              console.log('user already exists');
              return 'user already exists';
            }
          });
  }

  async validateUser(authenticateUserDto: AuthenticateUserDto): Promise<any> {
    return 'signInUser function';

    // const user = this.authClient.send('validate_user', JSON.stringify(authenticateUserDto)).subscribe();
    // console.log(`found user ${user.name}`);

    this.authClient
          .send('validate_user', JSON.stringify(authenticateUserDto))
          .subscribe((user) => {
            if (user != null) {
              console.log(`found user ${user.name}`);
              return user;
            }
            else {
              return 'email or password is incorrect';
            }
          });
    // this.authClient.emit('validate_user', JSON.stringify(authenticateUserDto));
  }

  onModuleInit() {
    this.authClient.subscribeToResponseOf('create_user');
    this.authClient.subscribeToResponseOf('validate_user');
  }
}