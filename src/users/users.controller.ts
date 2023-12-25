import { Body, Controller, Delete, Get, Param, Post, Put, UseGuards } from '@nestjs/common';
import { UsersService } from './users.service';
import { UserDto } from './dto/users.dto';
import { AuthGuard } from 'src/auth/guards/auth.guard';
import { Roles } from 'src/auth/guards/admin-auth.decorater';
import { AdminGuard } from 'src/auth/guards/admin.guard';
import { AuthService } from 'src/auth/auth.service';
import { JwtService } from '@nestjs/jwt';

@Controller('users')
export class UsersController {
   constructor (private usersService: UsersService, private authService: AuthService, private jwtService: JwtService) {}

   @UseGuards(AuthGuard)
   @Get()
     GetAll() {
        return this.usersService.GetAll()
    }

    @Post()
      AddUser(@Body() User: UserDto) {
        return this.usersService.AddUser(User)
    }

    @UseGuards(AuthGuard)
    @Get('api/:id')
      GetOne(@Param('id') idx: string) {
        return this.usersService.GetOne(idx)
    }

    @Post('/login')
      GetByNumber(@Body('number') number: number) {
        return this.usersService.getUserByNumber(number)
    }
    
    @UseGuards(AuthGuard)
    @Put('/:id')
      UpdateUser(@Param('id') idx: string, @Body() NewUser: UserDto) {
        return this.usersService.editUser(idx, NewUser)
    }
    
    @Roles('ADMIN')
    @UseGuards(AdminGuard)
    @Delete('/:id')
      DeleteUser(@Param('id') idx: string) {
        return this.usersService.DeleteUser(idx) 
    } 
}