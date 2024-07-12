import { IsNotEmpty, IsString } from 'class-validator';

export class CreateUserDto {
    @IsString()
    @IsNotEmpty()
    name: string;

    @IsString()
    @IsNotEmpty()
    username: string;

    @IsString()
    @IsNotEmpty()
    id: string;

    constructor(name: string, username: string, userId: string) {
        this.name = name;
        this.username = username;
        this.id = userId;
    }
}