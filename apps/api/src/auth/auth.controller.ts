import { Body, Controller, Post, Req, Res, UseGuards } from "@nestjs/common";
import { AuthService } from "./auth.service";
import { LoginDto } from "./dto/login.dto";
import { RegisterDto } from "./dto/register.dto";
import type { Request, Response } from "express";
import { AuthGuard } from "@nestjs/passport";

@Controller('auth')
export class AuthController{
  constructor(private readonly authService: AuthService){}

  @Post('login')
  async login(@Body() body: LoginDto, @Res({passthrough: true}) res: Response ){
    const {accessToken, refreshToken} = await this.authService.login(body);
    res.cookie('access_token', accessToken, {
      httpOnly: true,
      secure: true,
      sameSite: 'strict',
      maxAge: 24*60*60*1000,
    });
    res.cookie('refresh_token', refreshToken, {
      httpOnly: true,
      secure: true,
      sameSite: 'strict',
      maxAge: 7*24*60*60*1000,
    });
    return {accessToken, refreshToken}
  }

  @Post('register')
  async register(@Body() body: RegisterDto, @Res({passthrough: true}) res: Response){
    const {accessToken, refreshToken} = await this.authService.register(body);
    res.cookie('access_token', accessToken, {
      httpOnly: true,
      secure: true,
      sameSite: 'strict',
      maxAge: 24*60*60*1000,
    })
    res.cookie('refresh_token', refreshToken, {
      httpOnly: true,
      secure: true,
      sameSite: 'strict',
      maxAge: 7*24*60*60*1000,
    });
    return { accessToken, refreshToken };
  }

  @UseGuards(AuthGuard('jwt-refresh'))
  @Post('refresh')
  async refresh(@Req() req: Request, @Res({passthrough: true}) res: Response){
    const accessToken = await this.authService.refreshAccessToken(req.user as { user_id: string; role: string });
    res.cookie('access_token', accessToken, {
      httpOnly: true,
      secure: true,
      sameSite: 'strict',
      maxAge: 24*60*60*1000,
    });
    return { accessToken };
  }

}

