import { Injectable, UnauthorizedException } from "@nestjs/common";
import { JwtService } from "@nestjs/jwt";
import { InjectRepository } from "@nestjs/typeorm";
import { Repository } from "typeorm";
import * as bcrypt from 'bcrypt'
import { User } from "./entities/user.entity";
import { RegisterDto } from "./dto/register.dto";
import { LoginDto } from "./dto/login.dto";

@Injectable()
export class AuthService{
  constructor(
    @InjectRepository(User) private users: Repository<User>,
    private jwt: JwtService,
  ){}

  async register(dto: RegisterDto){
    const hash = await bcrypt.hash(dto.password, 10)
    try {
      const user = await this.users.save({...dto, password: hash})
      return this.jwt.sign({sub: user.id, role: user.role});
    } catch (err: any) {
      throw err;
    }
  }

  async login(dto: LoginDto){
    const user = await this.users.findOneBy({email: dto.email});
    if(!user || !(await bcrypt.compare(dto.password, user.password))){
      throw new UnauthorizedException('Invalid credentials');
    }
    return this.jwt.sign({sub: user.id, role: user.role});
  }
}