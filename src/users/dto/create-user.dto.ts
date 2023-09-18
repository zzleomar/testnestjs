import { IsEmail, IsString } from 'class-validator';

export class CreateUserDto {
  @IsString()
  fullName: string;

  @IsEmail()
  email: string;

  @IsEmail()
  bio: string;

  @IsString()
  password: string;
}
