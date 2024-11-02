import { IsUUID } from 'class-validator';
import { ApiProperty } from '@nestjs/swagger';

export class GetUserLikesDto {
    @ApiProperty({
        description: 'UUID of the user',
        example: '550e8400-e29b-41d4-a716-446655440000',
    })
    @IsUUID()
    userUUID: string;

    @ApiProperty({
        description: 'UUID of the type',
        example: 'a65e8400-bf2d-42e1-b723-678655440111',
    })
    @IsUUID()
    typeUUID: string;
}
