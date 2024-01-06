import { Body, Controller, Get, HttpException, HttpStatus, Param, Post, Put, UseGuards } from '@nestjs/common';
import { AuthService } from './auth.service';
import { RegisterDto } from './dto/register.dto';
import { LoginDto } from './dto/login.dto';
import { AuthGuard } from './guards/auth.guard';
import { JwtService } from '@nestjs/jwt';
import { UsersService } from 'src/users/users.service';

@Controller('auth')
export class AuthController {
    constructor( private authService: AuthService, private jwtService: JwtService, private userService: UsersService ) {}
    @Post('/register')
      Register(@Body() User: RegisterDto) {
        return this.authService.Register(User)
      }
    
    @Post('/login')  
      Login(@Body() User: LoginDto) {
        return this.authService.login(User)
    }

    @Get('/user/:token')
      Profile(@Param('token') token: string) {
        return this.authService.VerifyToken(token)
        }

    
    @Put('/edit/:id')
      EditProfile(@Body('user') NewUser: RegisterDto, @Param('id') idx: string) {
        this.userService.editUser(idx, NewUser)
        try{
          return this.authService.EditProfile(NewUser)
        }
        catch{
          throw new HttpException('Forbidden', HttpStatus.FORBIDDEN);
        }
      }
}