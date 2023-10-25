import { IsNumber, IsBoolean, IsNotEmpty, IsString } from 'class-validator';

export class UserLikePostDto {
  @IsNumber()
  @IsNotEmpty()
  postId: number;

  @IsString()
  @IsNotEmpty()
  username: string;

  @IsBoolean()
  @IsNotEmpty()
  like: boolean;

  constructor(username: string, postId: number, like: boolean) {
    this.postId = postId;
    this.username = username;
    this.like = like;
  }
}