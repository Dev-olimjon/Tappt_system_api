import { Injectable } from "@nestjs/common";
import { InjectModel } from "@nestjs/sequelize";
import { LanguageTable } from "./madel/language.madel";
import { Op } from "sequelize";

@Injectable()
export class langaugeService {
  constructor(@InjectModel(LanguageTable) private LanguageRepository: typeof LanguageTable) {}

  async AddLanguage(value: string) {
    return await this.LanguageRepository.create(value)
  }

  async GetAll() {
    return await this.LanguageRepository.findAll()
  }

  async GetById(id: string) {
    return await this.LanguageRepository.findOne({where: {id: id}})
  }

  async SearchLanguage(query: string) {
    return await this.LanguageRepository.findAll({where:{value: {[Op.like]: `%${query}%`}}})
  }

  async Delete(id: string) {
    return await this.LanguageRepository.destroy({where: {id: id}})
  }

}