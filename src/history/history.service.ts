import { Injectable } from '@nestjs/common';
import {InjectModel} from "@nestjs/sequelize";
import {HistoryTable} from "./madel/history.madel";
import { HistoryDto } from './dto/history.dto';
import { v4 as uuid } from 'uuid';

@Injectable()
export class HistoryService {
    constructor(@InjectModel(HistoryTable) private historyRepository: typeof HistoryTable) { }

    async create(history: HistoryDto) {
        let newHistory: HistoryDto = {
          id: uuid(),
          userId: history.userId,
          bookId: history.bookId  
        }
        return await this.historyRepository.create(newHistory)
    }

    async GetAll() {
        
    }
}
