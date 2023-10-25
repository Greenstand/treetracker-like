import { Injectable } from '@nestjs/common';
import { AuthDto } from '../dto/auth.dto';
import axios from 'axios';
import jwt from 'jsonwebtoken';
import { CreateUserDto } from '@like-button-sample/shared';

@Injectable()
export class UserService {
  constructor() {}

  async validateUser(authDto: AuthDto) {
    const body = {
      grant_type: 'password',
      username: authDto.username,
      password: authDto.password,
      client_id: 'like-dashboard',
    };
    const res = await axios.post(
      'https://dev-k8s.treetracker.org/auth/realms/like-system/protocol/openid-connect/token', 
      body, 
      {headers: {'content-type': 'application/x-www-form-urlencoded'}}
    )
      .catch((e) => {
        if (e.response) {
          // Status code falls out of the range of 2xx
          console.log(e.response.data);
          console.log(e.response.status);
          // console.log(e.response.headers);
        } else if (e.request) {
          // No response was received
          console.log(e.request);
        }
        return null;
      });

    const userId: string = await jwt.decode(res['data']['access_token'])['sub'].toString();
    const getUserQuery = await axios.get(`http://localhost:3010/users/${userId}`);
    let user = getUserQuery['data'];
    if (user == null || user.length == 0) {
      const createUserQuery = await axios.post('http://localhost:3010/users', new CreateUserDto('John Doe', authDto.username, userId));
      user = createUserQuery['data'];
    }
    return { tokens: res['data'], user_data: { username: user['username'], name: user['name'] } };
  }

  async getUserPosts(username: string) {
    const posts = await axios.get(`http://localhost:3010/users/${username}/posts`);
    return posts;
  }
}