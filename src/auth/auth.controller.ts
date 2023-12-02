import { Body, Controller, Post } from '@nestjs/common';
import { AuthService } from './auth.service';
import { RegisterDto } from './dto/register.dto';
import { LoginDto } from './dto/login.dto';

@Controller('auth')
export class AuthController {
    constructor( private authService: AuthService ) {}
    @Post('/register')
      Register(@Body() User: RegisterDto) {
        return this.authService.Register(User)
      }
    
    @Post('/login')  
      Login(@Body() User: LoginDto) {
        return this.authService.login(User)
      }
}
