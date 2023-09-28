import { IsEmail, IsNotEmpty, IsString } from 'class-validator';

export class CreatePostDto {
    @IsEmail()
    @IsNotEmpty()
    userEmail: string;

    @IsString()
    @IsNotEmpty()
    content: string;
}