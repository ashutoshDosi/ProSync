import { Body, Controller, Post } from "@nestjs/common";
import { AuthService } from "./auth.service";
import { LoginDto } from "./dto/login.dto";
import { RegisterDto } from "./dto/register.dto";

@Controller('auth')
export class AuthController{
  constructor(private readonly authService: AuthService){}

  @Post('login')
  async login(@Body() body: LoginDto){
    const accessToken = await this.authService.login(body);
    return { accessToken };
  }

  @Post('register')
  async register(@Body() body: RegisterDto){
    const accessToken = await this.authService.register(body);
    return { accessToken };
  }
}

