import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/sequelize';
import { BannedsTable } from './madel/banned.madel';
import { v4 as uuid } from 'uuid';

@Injectable()
export class BannedService {
    constructor(@InjectModel(BannedsTable) private bannedsRepository: typeof BannedsTable) {}

    async GetAllBanned() {
        let banneds = await this.bannedsRepository.findAll()
        return banneds
    }

    async BannUsers(userId: string, describtion: string) {
        let Banned = {
            id: uuid(),
            userId: userId,
            describtion: describtion
         }
        return await this.bannedsRepository.create(Banned)
    }

    async GetOne(id: string) {
         return await this.bannedsRepository.findOne({ where: { id: id } })
    }

    async GetByUserId(userId: string) {
        return await this.bannedsRepository.findOne({ where: { userId: userId } })
    }
   
   async DeleteBann( id: string) {
        return await this.bannedsRepository.destroy({ where: { id: id } })
   }

   async DeleteByUserId(userId: string) {
        return await this.bannedsRepository.destroy({ where: { userId: userId } })
   }

   async UpdateDescribtion(idx: string, describtion: string) {
        return await this.bannedsRepository.update({describtion: describtion}, {
            where: {id: idx}
        })
   }

   async isPossible(id: string) {
    return await this.bannedsRepository.findOne({where:{userId: id}})
   }

}
