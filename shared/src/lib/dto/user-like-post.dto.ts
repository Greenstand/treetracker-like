import { IsNumber, IsNotEmpty, IsEmail } from 'class-validator';

export class UserLikePostDto {
  @IsNumber()
  @IsNotEmpty()
  postId: number;

  @IsEmail()
  @IsNotEmpty()
  userEmail: string;

  constructor(userEmail: string, postId: number) {
    this.postId = postId;
    this.userEmail = userEmail;
  }
}