import { Injectable, UnauthorizedException } from "@nestjs/common";
import { JwtService } from "@nestjs/jwt";
import { InjectRepository } from "@nestjs/typeorm";
import { Repository } from "typeorm";
import * as bcrypt from 'bcrypt'
import { User } from "./entities/user.entity";
import { RegisterDto } from "./dto/register.dto";
import { LoginDto } from "./dto/login.dto";
import { Roles } from "@repo/enums/user_roles.enum";

@Injectable()
export class AuthService{
  constructor(
    @InjectRepository(User) private users: Repository<User>,
    private jwt: JwtService,
  ){}

  async register(dto: RegisterDto){
    const hash = await bcrypt.hash(dto.password, 10)
    try {
      const user = await this.users.save({...dto, password: hash, role: Roles.CUSTOMER})
      const payload = {sub: user.user_id, role: user.role};
      return{
        accessToken: this.jwt.sign(payload),
        refreshToken: this.jwt.sign(payload, {expiresIn: '7d'})
      }
    } catch (err: any) {
      throw err;
    }
  }

  async login(dto: LoginDto){
    const user = await this.users.findOneBy({email: dto.email});
    if(!user || !(await bcrypt.compare(dto.password, user.password))){
      throw new UnauthorizedException('Invalid Credentials');
    }
    const payload = {sub: user.user_id, role: user.role}
    return{
      accessToken: this.jwt.sign(payload),
      refreshToken: this.jwt.sign(payload, {expiresIn: '7d'}),
    }
  }

  async refreshAccessToken(user: { user_id: string; role: string }){
    const payload = {sub: user.user_id, role: user.role};
    return this.jwt.sign(payload);
  }

}