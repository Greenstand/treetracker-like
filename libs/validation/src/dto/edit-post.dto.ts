import { IsNumber, IsNotEmpty, IsString } from 'class-validator';

export class EditPostDto {
  @IsNumber()
  @IsNotEmpty()
  postId: number;

  @IsString()
  @IsNotEmpty()
  content: string;
}