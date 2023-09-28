import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { Post } from '../entities/post.entity';
import { User } from '../entities/user.entity';
import { CreateUserDto } from '@like-button-sample/shared';


@Injectable()
export class UserService {
  constructor(
    @InjectRepository(User) private readonly userRepository: Repository<User>
  ) {}

  createUser(createUserDto: CreateUserDto) {
    let existedUser = null;
    this.userRepository.findOne({
        where: { email: createUserDto.email }
    })
        .then(u => { existedUser = u });
    if (existedUser != null) {
        return null;
    }
    let user: User = new User();
    user.name = createUserDto.name;
    user.email = createUserDto.email;
    return this.userRepository.save(user);
  }

  getUser(userId: number) {
    return this.userRepository.findOne({
      where: { id: userId }
    });
  }
}
