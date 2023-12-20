import { HttpCode, HttpStatus, Injectable, UnauthorizedException } from '@nestjs/common';
import { JwtService } from '@nestjs/jwt';
import { UsersService } from 'src/users/users.service';
import { RegisterDto } from './dto/register.dto';
import { UserDto } from 'src/users/dto/users.dto';
import { LoginDto } from './dto/login.dto';
import { UsersTable } from 'src/users/madel/users.madel';
import * as bcrypt from 'bcrypt';
import { Request, request } from 'express';


@Injectable()
export class AuthService {
    constructor(
        private jwtService: JwtService,
        private usersService: UsersService
    ) {}
   
    async Register( User: RegisterDto ) {
    let users = await this.usersService.getUserByNumber(User.number)
     if(users) {
        throw new UnauthorizedException({ mesaage: 'This number is using away....' })
     }
     else{
        this.usersService.AddUser(User)
     }
    }

    async generteToken(user: UserDto) {
        const payload = {
          id: user.id,
          name: user.name,
          surname: user.surname,
          number: user.number,
          role: user.role,
        }
        return {
          token: this.jwtService.sign(payload)
        }
    }

      async login(authDto: LoginDto) {
        const validate = await this.ValidateUser(authDto)
        return await this.generteToken(validate)
      }
    
      async ValidateUser(authDto: LoginDto) {
        const user: UsersTable = await this.usersService.getUserByNumber(authDto.number)
        if (user) {
          const passwordEqual = await bcrypt.compare(authDto.password, user.password)
          if (passwordEqual) {
            return user;
          }
          else {
            throw new UnauthorizedException({ mesaage: 'It is number or password wrong' })
          }
        }
        throw new UnauthorizedException({ mesaage: 'It is number or password wrong' })
      }
      
      async VerifyToken() {
      const token = this.extractTokenFromHeader(request);
        const payload = await this.jwtService.verifyAsync(
          token,
          {
            secret: 'secret'
          }
        );
        return payload
      }

      private extractTokenFromHeader(request: Request): string | undefined {
        const [type, token] = request.headers.authorization?.split(' ') ?? [];
        return type === 'Bearer' ? token : undefined;
      }
}
