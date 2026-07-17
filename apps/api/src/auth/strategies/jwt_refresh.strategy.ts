import { Injectable, UnauthorizedException } from "@nestjs/common";
import { ConfigService } from "@nestjs/config";
import { PassportStrategy } from "@nestjs/passport";
import { Request } from "express";
import { ExtractJwt, Strategy } from "passport-jwt";

@Injectable()
export class JwtRefreshStrategy extends PassportStrategy(Strategy, 'jwt-refresh'){
  constructor(private configService: ConfigService){
    super({
      jwtFromRequest: ExtractJwt.fromExtractors([
        (req: Request) => {
          return req?.cookies?.refresh_token || null;
        }
      ]),
      ignoreExpiration: false,
      secretOrKey: configService.getOrThrow<string>('JWT_SECRET'),
      passReqToCallback: true,
    })
  }

  async validate(req: Request, payload: any){
    const refreshToken = req?.cookies?.refresh_token;

    if(!refreshToken){
      throw new UnauthorizedException('Refresh Token missing from cookies');
    }
    return {user_id: payload.sub, role: payload.role, refreshToken}
  }
}