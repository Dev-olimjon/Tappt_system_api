import { Injectable } from '@nestjs/common';
import { InjectModel } from "@nestjs/sequelize";
import { HistoryTable } from "./madel/history.madel";
import { HistoryDto } from './dto/history.dto';
import { v4 as uuid } from 'uuid';

@Injectable()
export class HistoryService {
  constructor(@InjectModel(HistoryTable) private historyRepository: typeof HistoryTable) { }

  async create(history: HistoryDto) {
    let newHistory: HistoryDto = {
      id: uuid(),
      userId: history.userId,
      bookId: history.bookId,
      bookbanner: history.bookbanner,
      bookpath: history.bookpath
    }
    try{
      return await this.historyRepository.create(newHistory)
    }
    catch(e){
    console.log(e)
    return e.message
    }
  }

  async GetAll() {
    return await this.historyRepository.findAll()
  }

  async GetOne(idx: string) {
    return await this.historyRepository.findOne({ where: { id: idx } })
  }

  async GetByUserId(idx: string) {
    return await this.historyRepository.findAll({ where: { userId: idx } })
  }

  async GetByBookId(idx: string) {
    return await this.historyRepository.findOne({ where: { bookId: idx } })
  }

  async DeleteOne(idx: string) {
    return await this.historyRepository.destroy({ where: { id: idx } })
  }

  async DeleteByUserId(idx: string) {
    return await this.historyRepository.destroy({ where: { userId: idx } })
  }

  async DeleteByBookId(idx: string) {
    await this.historyRepository.destroy({ where: { bookId: idx } })
  }

  async RefrshSame(bookID: string, userID: string) {
    await this.historyRepository.destroy( { where: {bookId: 'jjj', userId: userID}} )
  }
}
