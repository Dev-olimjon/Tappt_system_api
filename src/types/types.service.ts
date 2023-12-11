import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/sequelize';
import { TypesTable } from './madel/types.madel';
import { Op } from 'sequelize';
@Injectable()
export class TypesService {
    constructor(@InjectModel(TypesTable) private typesRepository: typeof TypesTable) { }

    async AddType(value: string) {
        return await this.typesRepository.create(value)
      }
    
      async GetAll() {
        return await this.typesRepository.findAll()
      }
    
      async GetById(id: string) {
        return await this.typesRepository.findOne({where: {id: id}})
      }
    
      async SearchType(query: string) {
        return await this.typesRepository.findAll({where: {value: {[Op.like]: `%${query}%`}}})
      }
    
      async Delete(id: string) {
        return await this.typesRepository.destroy({where: {id: id}})
      }
}
