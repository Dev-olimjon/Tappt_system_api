import { Get, Injectable, UseGuards } from '@nestjs/common';
import { InjectModel } from '@nestjs/sequelize';
import { UsersTable } from './madel/users.madel';
import { UserDto } from './dto/users.dto';
import { v4 as uuid } from 'uuid';
import * as bcrypt from 'bcrypt';
import { RegisterDto } from 'src/auth/dto/register.dto';
import { AuthGuard } from 'src/auth/guards/auth.guard';
import { Sequelize } from 'sequelize';
import sequelize from 'sequelize';
import { sql } from '@sequelize/core';

@Injectable()
export class UsersService {
    constructor(@InjectModel(UsersTable) private userRepository: typeof UsersTable) {}


    async AddUser(User: RegisterDto) {
      const hashedPassword = await bcrypt.hash(User.password, 10)
      let CreatingUser: UserDto = {
         id: uuid(),
         name: User.name,
         surname: User.surname,
         number: User.number,
         password: hashedPassword,
         role: 'USER'
      }   
      let AddedUser = await this.userRepository.create(CreatingUser)
      return AddedUser
    }

    async GetAll() {
        const Users = await this.userRepository.findAll()
        return Users
    }

    async GetOne(idx: string) {
        const GetOne = await this.userRepository.findOne({ where: { id: idx } })
        return GetOne
    } 

    async editUser(idx: string, User: RegisterDto) {
        const hashedPassword = await bcrypt.hash(User.password, 10)
        const Edituser = await this.userRepository.update({
           name: User.name,
           surname: User.surname,
           password: hashedPassword,
        }, {
           where: {
              id: idx
           }
        })
        return Edituser
    } 
    async getUserByNumber(number: number){
        const User = await this.userRepository.findOne({where: {number: number}})
        return User
    }

    async DeleteUser(idx: string) {
        const Deleteuser = await this.userRepository.destroy({ where: { id: idx } })
        return Deleteuser
    }

}
