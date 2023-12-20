import { Body, Controller, Get, HttpStatus, Param, Post, UseGuards } from '@nestjs/common';
import { AuthService } from './auth.service';
import { RegisterDto } from './dto/register.dto';
import { LoginDto } from './dto/login.dto';
import { AuthGuard } from './guards/auth.guard';
import { JwtService } from '@nestjs/jwt';

@Controller('auth')
export class AuthController {
    constructor( private authService: AuthService, private jwtService: JwtService ) {}
    @Post('/register')
      Register(@Body() User: RegisterDto) {
        return this.authService.Register(User)
      }
    
    @Post('/login')  
      Login(@Body() User: LoginDto) {
        return this.authService.login(User)
    }

    @UseGuards(AuthGuard)
    @Get('/user/:token')
      Profile(@Param('token') token: string) {
        return this.authService.VerifyToken(token)
        }
      }
