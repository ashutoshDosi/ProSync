import { Injectable } from "@nestjs/common";
import { ConfigService } from "@nestjs/config";
import {PassportStrategy} from '@nestjs/passport'
import { ExtractJwt, Strategy } from "passport-jwt";
import { Request } from "express";

@Injectable()
export class JwtStrategy extends PassportStrategy(Strategy){
  constructor(private configService: ConfigService){
    super({
      jwtFromRequest: ExtractJwt.fromExtractors([
        (req: Request) => {
          return req?.cookies?.access_token || null;
        }
      ]),
      ignoreExpiration: false,
      secretOrKey: configService.get<string>('JWT_SECRET')!,
    })
  }

  async validate(payload: any){
    return{user_id: payload.sub, role: payload.role}
  }
    
}