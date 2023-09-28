import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { User } from '../entities/user.entity';
import { CreateUserDto, AuthenticateUserDto } from '@like-button-sample/shared';
import * as bcrypt from 'bcrypt';

@Injectable()
export class AuthService {
  constructor(
    @InjectRepository(User) private readonly userRepository: Repository<User>
  ) {}
  
  async createAuthUser(createUserDto: CreateUserDto): Promise<User> {
    // this.userRepository.findOne({
    //   where: { email: createUserDto.email }
    // })
    //   .then(u => { existedUser = u });
    const existedUser = await this.userRepository.query(`SELECT * FROM "user" WHERE email = "${createUserDto.email}"`);
    if (existedUser != null) {
      console.log(`user ${existedUser[0].name} already exists`);
      return null;
    }
    let user: User = new User();
    user.name = createUserDto.name;
    user.email = createUserDto.email;
    user.password = createUserDto.password;
    // const salt = bcrypt.genSalt();
    // user.password = bcrypt.hash(createUserDto.password, salt);
    console.log(`saving user ${user.name}...`);
    return this.userRepository.save(user);
  }

  async authenticateUser(authenticateUserDto: AuthenticateUserDto): Promise<User> {
    // const hashed = bcrypt.hash(authenticateUserDto.password);
    // let user = null;
    // return this.userRepository.findOne({
    //   where: { 
    //     email: authenticateUserDto.email,
    //     password: authenticateUserDto.password 
    //   }
    // });
    const user = await this.userRepository.query(`SELECT * FROM "user" WHERE email = "${authenticateUserDto.email}" AND password = "${authenticateUserDto.password}"`);
    console.log(`found user ${user[0].name}`);
    return user[0];
    // return user;
  }
}