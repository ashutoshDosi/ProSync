import {IsEmail, IsEnum, IsString, MaxLength} from 'class-validator'
import { Roles } from '@repo/enums/user_roles.enum';

export class RegisterDto{
  @IsString()
  @MaxLength(50)
  name!: string;

  @IsEmail()
  @MaxLength(225)
  email!: string;

  @IsString()
  password!: string;

  @IsEnum(Roles)
  role!: Roles;

  @IsString()
  @MaxLength(10)
  phone!: string;
}